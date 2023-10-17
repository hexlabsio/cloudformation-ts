#!/usr/bin/env ts-node

import { Capability, CloudFormation, Parameter, Stack, StackEvent } from "@aws-sdk/client-cloudformation";
import { S3 } from "@aws-sdk/client-s3";

import * as fs from "fs";
import archiver from "archiver";
import chalk from "chalk";
import tsNode from "ts-node";
import { Command } from "commander";

const program = new Command();

function deleteCommand(): any {
  return program
    .command("delete <stackName>")
    .option(
      "-r, --region <region>",
      "The region to delete stack from",
      "eu-west-1"
    )
    .action(deleteStack);
}

function deployCommand(): any {
  return program
    .command("deploy <stackName> <templateLocation> [fileLocation]")
    .option(
      "-r, --region <region>",
      "The region to delete stack from",
      "eu-west-1"
    )
    .option("-e, --endpoint-url <endpoint-url>")
    .option(
      "-c, --capabilities <capability...>",
      "A space separated list of any of CAPABILITY_IAM, CAPABILITY_NAMED_IAM or CAPABILITY_AUTO_EXPAND",
      ["CAPABILITY_NAMED_IAM"]
    )
    .option(
      "-f, --file <files...>",
      "A space separated list of files to upload to s3"
    )
    .option("-b, --bucket <bucket>", "The s3 bucket in which to upload files")
    .option(
      "-p, --prefix <prefix>",
      "The s3 object key prefix in which to upload files"
    )
    .option(
      "--stack-upload",
      "Set if stack should be uploaded and referenced in s3"
    )
    .option(
      "-s, --stack-info <stacks...>",
      "A space separated list of stacks to get outputs as environment variables"
    )
    .option(
      "-o, --output-file <fileName>",
      "A file to output key-value pairs from stack-info"
    )
    .option("-t, --ts-project <fileName>", "TS Config")
    .option(
        "-v, --parameters <parametersFile>",
        "The location of the parameters file",
        "parameters.json"
    )
    .action(deployStack);
}

function translateCommand(): any {
  return program
    .command("translate <templateLocation>")
    .option(
      "-s, --stack-info <stacks...>",
      "A space separated list of stacks to get outputs as environment variables"
    )
    .option(
      "-r, --region <region>",
      "The region to gather stack outputs from",
      "eu-west-1"
    )
    .option("-t, --ts-project <fileName>", "TS Config")
    .action(generateStackCli);
}

(async () => {
  try {
    translateCommand();
    deployCommand();
    deleteCommand();
    await program.parseAsync(process.argv);
  } catch (e) {
    process.exit(1);
  }
})();

const terminalStatuses = [
  "CREATE_COMPLETE",
  "CREATE_FAILED",
  "DELETE_COMPLETE",
  "DELETE_FAILED",
  "ROLLBACK_COMPLETE",
  "ROLLBACK_FAILED",
  "UPDATE_COMPLETE",
  "UPDATE_ROLLBACK_COMPLETE",
  "UPDATE_ROLLBACK_FAILED",
];
const badStatuses = [
  "CREATE_FAILED",
  "DELETE_FAILED",
  "ROLLBACK_COMPLETE",
  "ROLLBACK_FAILED",
  "UPDATE_ROLLBACK_COMPLETE",
  "UPDATE_ROLLBACK_FAILED",
  "UPDATE_ROLLBACK_IN_PROGRESS",
  "DELETE_COMPLETE",
];
const successStatuses = ["CREATE_COMPLETE", "UPDATE_COMPLETE"];
const continuable = [
  ...successStatuses,
  "UPDATE_ROLLBACK_COMPLETE",
  "ROLLBACK_COMPLETE",
  "DELETE_COMPLETE",
];
const deleteSuccessStatuses = ["DELETE_COMPLETE"];

async function stackExists(
  cf: CloudFormation,
  name: string
): Promise<Stack | undefined> {
  const stacks = await cf.describeStacks({});
  return stacks.Stacks?.find(it => it.StackName === name);
}

async function deleteStack(stackName: string, command: any) {
  const region = command.region;
  const client = new CloudFormation({ region });
  const start = new Date().toISOString();
  try {
    const stack = await stackExists(client, stackName);
    if (stack) {
      const deletion = client
        .deleteStack({ StackName: stackName.toString() });
      console.log(
        chalk.green(`Deleting stack named ${stackName} from ${region}`)
      );
      await deletion;
      if (
        !(await followStackEvents(
          client,
          stackName,
          deleteSuccessStatuses,
          start
        ))
      ) {
        process.exit(1);
      }
    }
    console.log(
      chalk.yellow(`No stacks named ${stackName} in ${region} to delete`)
    );
  } catch (e) {
    if (e.message.includes("does not exist")) {
      console.log(chalk.green("Delete Complete"));
    } else {
      console.error(
        chalk.red("Delete failed due to the following error: " + e.message)
      );
    }
  }
}

async function setEnvsForStacks(
  stacks: string[],
  region: string
): Promise<{ [key: string]: string }> {
  try {
    const envs: Array<{ key: string; value: string }[]> = await Promise.all(
      stacks.map(async (stack) => {
        const hasRegion = stack.match(/^(\w+-\w+-\d+):(.*)/);
        const searchRegion = hasRegion ? hasRegion[1] : region;
        const searchString = hasRegion ? hasRegion[2] : stack;
        const client = new CloudFormation({ region: searchRegion });
        const cfStacks = await client.describeStacks({});
        console.log(
          chalk.green("Searching for stacks matching " + searchString)
        );
        const matchedStack = (cfStacks.Stacks ?? []).find(
          (it) =>
            !!it.StackName?.match(searchString) ||
            !!it.StackId?.match(searchString)
        );
        if (matchedStack) {
          console.log(chalk.green("Matched " + matchedStack.StackId));
          return (matchedStack.Outputs ?? []).map((output) => ({
            key: output.OutputKey!,
            value: output.OutputValue!,
          }));
        }
        console.log(chalk.red("No stacks matched pattern " + stack));
        return [];
      })
    );
    const envVars = envs
      .flat()
      .reduce((all, { key, value }) => ({ ...all, [key]: value }), {});
    process.env = { ...process.env, ...envVars };
    return envVars;
  } catch (e) {
    console.log(chalk.red(e));
    process.exit(1);
  }
}

async function requireFile(location: string): Promise<any> {
  try {
    return await import(location + `?update=${Math.random()}`);
  } catch (e) {
    console.log(chalk.red("Failed to require file"));
    console.log(e);
    process.exit(1);
  }
}

async function generateStackCli(
  templateLocation: string,command: any
): Promise<void> {
  await generateStack(templateLocation, command);
}

async function generateStack(
  templateLocation: string,
  command: any
): Promise<{[key: string]: string}> {
  if (command.tsProject) {
    tsNode.register({ project: command.tsProject });
  } else {
    tsNode.register();
  }
  if (templateLocation.endsWith(".ts")) {
    console.log(chalk.green(`Translating template at ${templateLocation}`));
    const stacks: string[] = command.stackInfo ?? [];
    const envs = await setEnvsForStacks(stacks, command.region);
    await requireFile(templateLocation);
    return envs;
  }
  return {};
}

async function deployStack(
  stackName: string,
  templateLocation: string,
  fileLocation: string,
  command: any
) {
  try {
    if (templateLocation.endsWith(".ts")) {
      const envs = await generateStack(templateLocation, command);
      await deploy(
        command.region,
        command.endpointUrl,
        stackName,
        fileLocation,
        command.parameters,
        command.capabilities,
        command.file,
        command.prefix,
        command.bucket,
        command.outputFile,
        envs,
        command.stackUpload
      );
    } else {
      const stacks: string[] = command.stackInfo ?? [];
      const envs = await setEnvsForStacks(stacks, command.region);
      if (command.tsProject) {
        tsNode.register({ project: command.tsProject });
      } else {
        tsNode.register();
      }
      await deploy(
        command.region,
        command.endpointUrl,
        stackName,
        templateLocation,
        command.parameters,
        command.capabilities,
        command.file,
        command.prefix,
        command.bucket,
        command.outputFile,
        envs,
        command.stackUpload
      );
    }
  } catch (e) {
    console.error(e);
  }
}

function zipDirectory(source: string, target: string): Promise<void> {
  const archive = archiver("zip", { zlib: { level: 9 } });
  const stream = fs.createWriteStream(target);
  return new Promise((resolve, reject) => {
    archive
      .directory(source, false)
      .on("error", (err: any) => reject(err))
      .pipe(stream);
    stream.on("close", () => resolve());
    archive.finalize();
  });
}

async function upload(
  files: string[],
  region: string,
  prefix: string,
  bucket: string
): Promise<string[]> {
  console.log(chalk.green("Uploading to S3"));
  const client = new S3({ region });
  const dateTime = new Date().toISOString();
  const randomPart = Math.floor(Math.random() * 10000000);
  const key = `${prefix}${randomPart}-${dateTime}/`;
  return await Promise.all(
    files.map(async (file) => {
      const fileName = file.includes("/")
        ? file.substring(file.lastIndexOf("/") + 1)
        : file;
      const keyName = `${key}${fileName}`;
      if (fs.lstatSync(file).isDirectory()) {
        console.log(chalk.green(`Zipping directory ${fileName}`));
        await zipDirectory(file, `${fileName}.zip`);
        console.log(
          chalk.green(`Uploading ${keyName}.zip to S3 bucket named ${bucket}`)
        );
        await client.putObject({
          ContentType: "application/zip",
          Bucket: bucket,
          Key: keyName + ".zip",
          Body: fs.readFileSync(`${fileName}.zip`),
          ServerSideEncryption: "AES256",
        });
        return keyName + ".zip";
      } else {
        console.log(
          chalk.green(`Uploading ${keyName} to S3 bucket named ${bucket}`)
        );
        await client
          .putObject({ Bucket: bucket, Key: keyName, Body: fs.readFileSync(file) });
        return keyName;
      }
    })
  );
}

function getParametersFile(parameterFile: string): {[name: string]: {envName: string} | string}{
  if(parameterFile) {
    try {
      const parametersContent = fs.readFileSync(parameterFile);
      return JSON.parse(parametersContent.toString())
    } catch (e) {
      console.warn(e);
    }
  } return {};
}

async function deploy(
  region: string,
  endpoint: string,
  stackName: string,
  template: string,
  parameterFile: string,
  capabilities: string[],
  files: string[],
  prefix: string,
  bucket: string,
  outputFile?: string,
  envs?: { [key: string]: string },
  shouldUpload?: boolean,
) {
  if(shouldUpload && !bucket) {
    console.log(chalk.red('Bucket is required for stack upload'));
    process.exit(1);
  }
  validateCapabilities(capabilities);
  const locations = files && bucket ? await upload(files, region, prefix ?? "", bucket) : [];
  const templateLocation = template ?? 'template.json';

  async function getFileContent(): Promise<string> {
    if(shouldUpload) {
      const files = await upload([templateLocation], region, prefix ?? "", bucket);
      return files[0];
    }
    else {
      console.log(chalk.green('Looking for template json from ' + templateLocation));
      return fs.readFileSync(templateLocation).toString();
    }
  }

  const content = await getFileContent();

  const parametersInfo = getParametersFile(parameterFile)
  const cf = new CloudFormation({ region, endpoint });
  const stack = await stackExists(cf, stackName);
  const start = new Date().toISOString();
  console.log(chalk.green(`Deploying ${stackName}`));
  const envParams = Object.keys(parametersInfo).map(it => {
    const info = parametersInfo[it];
    const envName = typeof info === 'object' ? info.envName : info;
    if(envName && !process.env[envName]) throw new Error(`Could not lookup parameter with name ${it}, or no env with name ${envName} was found`);
    return { ParameterKey: it, ParameterValue: envName ? process.env[envName] : info as string }
  });
  const parameters: Parameter[] =
      [...(files && bucket
      ? [
          { ParameterKey: "CodeBucket", ParameterValue: bucket },
          ...locations.map((location, index) => ({
            ParameterKey: "CodeLocation" + (index > 0 ? index : ""),
            ParameterValue: location,
          })),
        ]
      : []), ...envParams];
  console.log(
    chalk.green(
      `Passing the following parameters ${parameters
        .map((it) => `${it.ParameterKey}:${it.ParameterValue}`)
        .join(", ")}`
    )
  );
  if (stack) {
    if (continuable.includes(stack.StackStatus!)) {
      try {
        console.log(
          chalk.green(
            `Updating existing stack in region ${region} named ${stackName}`
          )
        );
        await cf
          .updateStack({
            StackName: stackName,
            Capabilities: capabilities as Capability[],
            Parameters: parameters,
            ...(shouldUpload ? { TemplateURL: `https://${bucket}.s3.${region}.amazonaws.com/${content}` }: { TemplateBody: content })
          })
      } catch (e) {
        if (e.message.includes("No updates are to be performed")) {
          console.log(chalk.yellow("No updates are to be performed"));
          printEnvs(stackName, region, outputFile, envs);
          return;
        } else {
          console.log(chalk.red(e.message));
          process.exit(1);
        }
      }
    } else {
      console.log(
        chalk.yellow(
          `The stack named ${stackName} is in state ${stack.StackStatus} and cannot be updated at this time. You may need to delete it before continuing.`
        )
      );
      process.exit(1);
    }
  } else {
    console.log(
      chalk.green(`Creating stack in region ${region} named ${stackName}`)
    );
    await cf
      .createStack({
        StackName: stackName,
        Capabilities: capabilities as Capability[],
        Parameters: parameters,
        ...(shouldUpload ? { TemplateURL: `https://${bucket}.s3.${region}.amazonaws.com/${content}` }: { TemplateBody: content })
      })
  }
  if (!(await followStackEvents(cf, stackName, successStatuses, start))) {
    process.exit(1);
  }
  printEnvs(stackName, region, outputFile, envs);
}

async function printEnvs(
  stackName: string,
  region: string,
  outputFile?: string,
  envs?: { [key: string]: string }
) {
  if (outputFile) {
    const stackEnvs = await setEnvsForStacks([stackName], region);
    const allEnvs = { ...envs, ...stackEnvs };
    const lines = Object.keys(allEnvs)
      .map((envKey) => `${envKey}='${allEnvs[envKey]}'`)
      .join("\n");
    console.log(chalk.green("Printing Stack outputs to " + outputFile));
    fs.writeFileSync(outputFile, lines);
  }
}

async function wait(milliseconds: number = 300): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function stackEvents(
  cf: CloudFormation,
  name: string,
  start: string
): Promise<StackEvent[]> {
  const events = (await cf.describeStackEvents({ StackName: name }))
    .StackEvents;
  return (
    events
      ?.sort((a, b) =>
        a.Timestamp!.toString().localeCompare(b.Timestamp!.toString())
      )
      .filter((e) => e.Timestamp!.toISOString() > start) || []
  );
}

async function getInitialEvents(
  cf: CloudFormation,
  name: string,
  start: string
) {
  let events: StackEvent[] = [];
  while (events.length === 0) {
    await wait();
    const next = await stackEvents(cf, name, start);
    events.forEach((ev) => console.log(ev));
    const startingPoint = next
      .reverse()
      .find(
        (ev) =>
          ev.ResourceType === "AWS::CloudFormation::Stack" &&
          !terminalStatuses.includes(ev.ResourceStatus!)
      );
    if (startingPoint) {
      events = next.slice(
        events.findIndex((ev) => ev.EventId === startingPoint!.EventId)
      );
    }
  }
  return events;
}

async function followStackEvents(
  cf: CloudFormation,
  name: string,
  success: string[],
  start: string
): Promise<boolean> {
  let events = await getInitialEvents(cf, name, start);
  // eslint-disable-next-line no-constant-condition
  while (true) {
    events.forEach(display);
    if (
      events.find(
        (it) =>
          it.ResourceType === "AWS::CloudFormation::Stack" &&
          terminalStatuses.includes(it.ResourceStatus!)
      )
    ) {
      return !!events.find(
        (it) =>
          it.ResourceType === "AWS::CloudFormation::Stack" &&
          success.includes(it.ResourceStatus!)
      );
    }
    await wait(5000);
    if (events.length > 0) start = events.pop()!.Timestamp!.toISOString();
    events = await stackEvents(cf, name, start);
  }
}

function display(e: StackEvent) {
  const color = badStatuses.includes(e.ResourceStatus!)
    ? chalk.red
    : successStatuses.includes(e.ResourceStatus!)
    ? chalk.green
    : chalk.blue;

  console.log(
    color(
      `${e.ResourceStatus?.padEnd(27)} ${e.LogicalResourceId} ${
        e.ResourceType
      } ${e.PhysicalResourceId} ${e.ResourceStatusReason || ""}`
    )
  );
}

function validateCapabilities(capabilities: string[]) {
  const valid = [
    "CAPABILITY_IAM",
    "CAPABILITY_NAMED_IAM",
    "CAPABILITY_AUTO_EXPAND",
  ];
  if (!capabilities || capabilities.length === 0) {
    console.error(chalk.red("At least one capability must be provided"));
    process.exit(1);
  }
  const errors = [
    ...valid
      .map((it) => {
        if (capabilities.filter((c) => c === it).length > 1) {
          return `${it} can only appear once`;
        }
        return null;
      })
      .filter((it) => !!it),
    ...capabilities
      .filter((it) => !valid.includes(it))
      .map((it) => `${it} is not a valid capability`),
  ];
  if (errors.length > 0) {
    errors.forEach((it) => console.error(chalk.red(it)));
    process.exit(1);
  }
}
