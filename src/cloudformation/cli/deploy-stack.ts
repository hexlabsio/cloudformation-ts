import { Capability, CloudFormation, Parameter } from '@aws-sdk/client-cloudformation';
import chalk from 'chalk';
import fs from 'fs';
import tsNode from 'ts-node';
import { continuableStatuses, followStackEvents, successStatuses } from './follow-stack-events';
import { generateStack } from './generate-stack';
import { setEnvsForStacks } from './set-envs-for-stacks';
import { stackExists } from './stack-exists';
import { upload } from './upload';
import { validateCapabilities } from './validate-capabilities';

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

export async function deployStack(
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
        command.bucketRegion,
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
        command.bucketRegion,
        command.outputFile,
        envs,
        command.stackUpload
      );
    }
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

export async function deploy(
  region: string,
  endpoint: string,
  stackName: string,
  template: string,
  parameterFile: string,
  capabilities: string[],
  files: string[],
  prefix: string,
  bucket: string,
  bucketRegion: string,
  outputFile?: string,
  envs?: { [key: string]: string },
  shouldUpload?: boolean,
) {
  if(shouldUpload && !bucket) {
    console.log(chalk.red('Bucket is required for stack upload'));
    process.exit(1);
  }
  validateCapabilities(capabilities);
  const locations = files && bucket ? await upload(files, bucketRegion ?? region, prefix ?? "", bucket) : [];
  const templateLocation = template ?? 'template.json';

  async function getFileContent(): Promise<string> {
    if(shouldUpload) {
      const files = await upload([templateLocation], bucketRegion ?? region, prefix ?? "", bucket);
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
    const isEnv = typeof info === 'object';
    const envName = isEnv ? info.envName : info;
    if(isEnv && !process.env[envName]) throw new Error(`Could not lookup parameter with name ${it}, or no env with name ${envName} was found`);
    return { ParameterKey: it, ParameterValue: isEnv ? process.env[envName] : info as string }
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
    if (continuableStatuses.includes(stack.StackStatus!)) {
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