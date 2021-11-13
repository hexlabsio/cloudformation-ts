#!/usr/bin/env node
import {
  APIGatewayProxyEvent,
  SNSEvent,
  SNSMessage,
  SNSMessageAttribute,
  SNSMessageAttributes,
} from "aws-lambda";
import { CloudFormation, S3 } from "aws-sdk";
import * as fs from "fs";
import { ApiDefinition, SnsDefinition } from "./modules/api";
const archiver = require("archiver");
const chalk = require("chalk");
const tsNode = require("ts-node");
import express, { RequestHandler } from "express";
import { MessageAttributeMap, MessageAttributeValue } from "aws-sdk/clients/sns";
const { Command } = require("commander");

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
    .action(generateStack);
}

function runCommand(): any {
  return program
    .command("run <templateLocation> <handler> <codeLocation>")
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
    .action(runApi);
}

(async () => {
  try {
    translateCommand();
    deployCommand();
    runCommand();
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
): Promise<CloudFormation.Stack | undefined> {
  const stacks = await cf.describeStacks().promise();
  if (stacks.Stacks) {
    return stacks.Stacks.find((it) => it.StackName === name);
  }
}

async function deleteStack(stackName: string, command: any) {
  const region = command.region;
  const client = new CloudFormation({ region });
  const start = new Date().toISOString();
  try {
    const stack = await stackExists(client, stackName);
    if (stack) {
      const deletion = client
        .deleteStack({ StackName: stackName.toString() })
        .promise();
      console.log(
        chalk.green(`Deleting stack named ${stackName} from ${region}`)
      );
      const result = await deletion;
      if (result.$response.error) {
        console.log(chalk.red(result.$response.error));
      } else {
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
        const cfStacks = await client.describeStacks().promise();
        console.log(
          chalk.green("Searching for stacks matching " + searchString)
        );
        const matchedStack = (cfStacks.Stacks ?? []).find(
          (it) =>
            !!it.StackName.match(searchString) ||
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

function requireTemplate(location: string): any {
  try {
    return require(location);
  } catch (e) {
    console.log(chalk.red("Failed to require stack file"));
    console.log(chalk.red(e));
    process.exit(1);
  }
}

async function generateStack(
  templateLocation: string,
  command: any
): Promise<{ [key: string]: string }> {
  if (command.tsProject) {
    tsNode.register({ project: command.tsProject });
  } else {
    tsNode.register();
  }
  if (templateLocation.endsWith(".ts")) {
    console.log(chalk.green(`Translating template at ${templateLocation}`));
    const stacks: string[] = command.stackInfo ?? [];
    const envs = await setEnvsForStacks(stacks, command.region);
    requireTemplate(templateLocation);
    return envs;
  }
  return {};
}

function rawBody(req, res, next) {
  req.setEncoding("utf8");
  req.rawBody = "";
  req.on("data", function (chunk) {
    req.rawBody += chunk;
  });
  req.on("end", function () {
    next();
  });
}

function clearRequireCache() {
  Object.keys(require.cache).forEach(function (key) {
    delete require.cache[key];
  });
}

function queryParameters(expressQuery: {
  [key: string]: undefined | string | string[];
}) {
  return Object.keys(expressQuery).reduce(
    (acc, elem) => {
      if (expressQuery[elem]) {
        return Array.isArray(expressQuery[elem])
          ? {
              queryStringParameters: {
                ...acc.queryStringParameters,
                [elem]: (expressQuery[elem] as string[])[0],
              },
              multiValueQueryStringParameters: {
                ...acc.multiValueQueryStringParameters,
                [elem]: expressQuery[elem],
              },
            }
          : {
              queryStringParameters: {
                ...acc.queryStringParameters,
                [elem]: expressQuery[elem],
              },
              multiValueQueryStringParameters: {
                ...acc.multiValueQueryStringParameters,
                [elem]: [expressQuery[elem]],
              },
            };
      } else {
        return acc;
      }
    },
    {
      queryStringParameters: {},
      multiValueQueryStringParameters: {},
    }
  );
}

function convertSnsPublisherHeader(publisherHeader: MessageAttributeValue): SNSMessageAttribute {
  const {DataType, StringValue} = publisherHeader
  return {Type: DataType, Value: StringValue ?? ""}
}
function convertSnsPublisherHeaders(publisherHeaders: MessageAttributeMap): SNSMessageAttributes {
  return Object.keys(publisherHeaders)
    .reduce<SNSMessageAttributes>((acc, item) => ({[item]: convertSnsPublisherHeader(publisherHeaders[item])}), {})
}

function snsFunctionFor(
  topicName: string,
  codeLocation: string,
  handler: string
): RequestHandler {
  return (req, res) => {
    const request = (req as any).rawBody
    console.log(chalk.green(`request received : ${request}`))
    const parsedReq = JSON.parse(request)
    const publisherHeaders: MessageAttributeMap = parsedReq.headers
    const snsEvent: SNSEvent = {
      Records: [
        {
          EventVersion: "local-event-version",
          EventSubscriptionArn: `${topicName}-local-event-arn`,
          EventSource: `${topicName}-event-source`,
          Sns: {
            MessageAttributes: convertSnsPublisherHeaders(publisherHeaders),
            Message: parsedReq.body,
          } as SNSMessage,
        },
      ],
    };
    clearRequireCache();
    require(codeLocation)
      [handler](snsEvent)
      .then((_) => {
        console.log(
          chalk.green("SNS - TOPIC " + topicName + " processed message")
        );
        res.status(200).send("done");
      })
      .catch((error) => {
        console.log(chalk.red("SNS - TOPIC " + topicName + " threw " + error));
        res.status(500).send(error.message);
      });
  };
}

function functionFor(
  method: string,
  path: string,
  codeLocation: string,
  handler: string
): RequestHandler {
  return (req, res) => {
    const headers = req.headers;
    const authHeader = req.header("Authorization");
    const claims =
      authHeader && authHeader.includes("Bearer ")
        ? new Buffer(authHeader.substring(7).split(".")[1], "base64").toString(
            "ascii"
          )
        : undefined;
    const requestContext = claims
      ? { authorizer: { claims: JSON.parse(claims) } }
      : undefined;
    const params = req.params;
    const queryParams = queryParameters(
      (req.query ?? {}) as { [key: string]: undefined | string | string[] }
    );
    const event: APIGatewayProxyEvent = {
      headers: headers as APIGatewayProxyEvent["headers"],
      resource: path,
      body: (req as any).rawBody,
      httpMethod: method.toUpperCase(),
      pathParameters: params,
      path: req.path,
      requestContext,
      ...queryParams,
    } as unknown as APIGatewayProxyEvent;
    clearRequireCache();
    require(codeLocation)
      [handler](event)
      .then((response) => {
        console.log(
          chalk.green(
            "API - " +
              method +
              " " +
              req.path +
              " responded with " +
              response.statusCode
          )
        );
        res
          .status(response.statusCode)
          .set(response.headers)
          .send(response.body);
      })
      .catch((error) => {
        console.log(
          chalk.red("API - " + method + " " + req.path + " threw " + error)
        );
        res.status(500).send(error.message);
      });
  };
}

function attachApis(
  apis: ApiDefinition[],
  handler: string,
  codeLocation: string,
  port: string,
  app
) {
  apis.forEach((api) => {
    api.resources.forEach((resource) => {
      const path = "/" + resource.path.replace(/{([^/{}]+)}/g, ":$1");
      app[resource.method.toLowerCase()](
        path,
        functionFor(resource.method, "/" + resource.path, codeLocation, handler)
      );
      console.log(
        chalk.green(`${resource.method} http://localhost:${port}${path}`)
      );
    });
  });
}

function attachSnsApis(
  snsDefinitions: SnsDefinition[],
  codeLocation: string,
  port: string,
  app
) {
  snsDefinitions.forEach((snsDefinition) => {
    const path =
      "/sns/" + snsDefinition.topicName.replace(/{([^/{}]+)}/g, ":$1");
    app["post"](
      path,
      snsFunctionFor(
        snsDefinition.topicName,
        codeLocation,
        snsDefinition.handler
      )
    );
    console.log(chalk.green(`TOPIC http://localhost:${port}${path}`));
  });
}

async function runApi(
  templateLocation: string,
  handler: string,
  codeLocation: string,
  command: any
) {
  try {
    if (command.tsProject) {
      tsNode.register({ project: command.tsProject });
    } else {
      tsNode.register();
    }
    console.log(
      chalk.green(`Running apis from template at ${templateLocation}`)
    );
    const lambda = require(codeLocation);
    if (lambda && lambda[handler]) {
      const stacks: string[] = command.stackInfo ?? [];
      await setEnvsForStacks(stacks, command.region);
      const definition: any = requireTemplate(templateLocation);
      const apis: ApiDefinition[] = definition?.default?.outputs?.apis ?? [];
      const localSNS: SnsDefinition[] = definition?.default?.outputs?.sns ?? [];
      if (apis.length + localSNS.length === 0) {
        console.log(
          chalk.red(
            "No API or SNS definitions exported please check docs on usage"
          )
        );
        process.exit(1);
      }
      const PORT = process.env.PORT || "3000";
      const app = express();
      app.use(rawBody);
      attachApis(apis, handler, codeLocation, PORT, app);
      attachSnsApis(localSNS, codeLocation, PORT, app);
      app.listen(PORT, () =>
        console.log(`⚡Server is running here 👉 http://localhost:${PORT}`)
      );
    } else {
      throw new Error("Handler not found in code file");
    }
  } catch (e) {
    console.log(chalk.red(e));
    process.exit(1);
  }
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
        envs
      );
    } else {
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
        command.bucket
      );
    }
  } catch (e) {
    console.error(chalk.red(e));
  }
}

function zipDirectory(source: string, target: string): Promise<void> {
  const archive = archiver("zip", { zlib: { level: 9 } });
  const stream = fs.createWriteStream(target);
  return new Promise((resolve, reject) => {
    archive
      .directory(source, false)
      .on("error", (err) => reject(err))
      .pipe(stream);
    stream.on("close", () => resolve());
    archive.finalize();
  });
}

async function upload(
  files: string[],
  prefix: string,
  bucket: string
): Promise<string[]> {
  console.log(chalk.green("Uploading to S3"));
  const client = new S3();
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
        await client
          .upload({
            ContentType: "application/zip",
            Bucket: bucket,
            Key: keyName + ".zip",
            Body: fs.readFileSync(`${fileName}.zip`),
            ServerSideEncryption: "AES256",
          })
          .promise();
        return keyName + ".zip";
      } else {
        console.log(
          chalk.green(`Uploading ${keyName} to S3 bucket named ${bucket}`)
        );
        await client
          .upload({ Bucket: bucket, Key: keyName, Body: fs.readFileSync(file) })
          .promise();
        return keyName;
      }
    })
  );
}

function getParametersFile(parameterFile: string): {[name: string]: {envName: string}}{
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
  envs?: { [key: string]: string }
) {
  validateCapabilities(capabilities);
  const locations = files && bucket ? await upload(files, prefix ?? "", bucket) : [];
  const templateContent = fs.readFileSync(template);
  const parametersInfo = getParametersFile(parameterFile)
  const cf = new CloudFormation({ region, endpoint });
  const stack = await stackExists(cf, stackName);
  const start = new Date().toISOString();
  console.log(chalk.green(`Deploying ${stackName}`));
  const envParams = Object.keys(parametersInfo).map(it => {
    const info = parametersInfo[it];
    const envName = info.envName;
    if(!envName || !process.env[envName]) throw new Error(`Could not lookup parameter with name ${it}, or no env with name ${envName} was found`);
    return { ParameterKey: it, ParameterValue: process.env[envName] }
  });
  const parameters: CloudFormation.Parameter[] =
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
    if (continuable.includes(stack.StackStatus)) {
      try {
        console.log(
          chalk.green(
            `Updating existing stack in region ${region} named ${stackName}`
          )
        );
        const result = await cf
          .updateStack({
            StackName: stackName,
            Capabilities: capabilities,
            TemplateBody: templateContent.toString(),
            Parameters: parameters,
          })
          .promise();
        if (result.$response.error) {
          console.log(chalk.red(result.$response.error));
          process.exit(1);
        }
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
    const result = await cf
      .createStack({
        StackName: stackName,
        Capabilities: capabilities,
        TemplateBody: templateContent.toString(),
        Parameters: parameters,
      })
      .promise();
    if (result.$response.error) {
      console.log(chalk.red(result.$response.error));
      process.exit(1);
    }
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
  const stackEnvs = await setEnvsForStacks([stackName], region);
  const allEnvs = { ...envs, ...stackEnvs };
  const lines = Object.keys(allEnvs)
    .map((envKey) => `${envKey}='${allEnvs[envKey]}'`)
    .join("\n");
  console.log(lines);
  if (outputFile) {
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
): Promise<CloudFormation.StackEvent[]> {
  const events = (await cf.describeStackEvents({ StackName: name }).promise())
    .StackEvents;
  return (
    events
      ?.sort((a, b) =>
        a.Timestamp.toString().localeCompare(b.Timestamp.toString())
      )
      .filter((e) => e.Timestamp.toISOString() > start) || []
  );
}

async function getInitialEvents(
  cf: CloudFormation,
  name: string,
  start: string
) {
  let events: CloudFormation.StackEvent[] = [];
  while (events.length === 0) {
    await wait();
    let next = await stackEvents(cf, name, start);
    events.forEach((ev) => console.log(ev));
    let startingPoint = next
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
    if (events.length > 0) start = events.pop()!.Timestamp.toISOString();
    events = await stackEvents(cf, name, start);
  }
}

function display(e: CloudFormation.StackEvent) {
  let color = badStatuses.includes(e.ResourceStatus!)
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
