#!/usr/bin/env ts-node

import { Command } from "commander";
import { deleteStack } from './delete-stack';
import { deployStack } from './deploy-stack';
import { generateStackCli } from './generate-stack';

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
    .option("-x, --bucket-region <region>", "The s3 bucket region in which to upload files")
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





