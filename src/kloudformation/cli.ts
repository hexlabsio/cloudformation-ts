#!/usr/bin/env node
import {Stack, StackEvent} from "aws-sdk/clients/cloudformation";
import { CloudFormation } from "aws-sdk";
import * as fs from 'fs';
const chalk = require('chalk');
require('ts-node').register();

const { Command } = require('commander');

const program = new Command();

function deleteCommand(): any {
  return program.command('delete <stackName>')
    .option('-r, --region <region>', 'The region to delete stack from', 'eu-west-1')
    .action(deleteStack)
}

function deployCommand(): any {
  return program.command('deploy <stackName> <templateLocation> [fileLocation]')
    .option('-r, --region <region>', 'The region to delete stack from', 'eu-west-1')
    .option('-c, --capabilities <capability...>', 'A space separated list of any of CAPABILITY_IAM, CAPABILITY_NAMED_IAM or CAPABILITY_AUTO_EXPAND', ["CAPABILITY_NAMED_IAM"])
    .action(deployStack)
}

(async () => {
  deleteCommand();
  deployCommand();
  await program.parseAsync(process.argv);
})();


const terminalStatuses = ['CREATE_COMPLETE', 'CREATE_FAILED', 'DELETE_COMPLETE', 'DELETE_FAILED', 'ROLLBACK_COMPLETE', 'ROLLBACK_FAILED', 'UPDATE_COMPLETE', 'UPDATE_ROLLBACK_COMPLETE', 'UPDATE_ROLLBACK_FAILED'];
const badStatuses = ['CREATE_FAILED', 'DELETE_FAILED', 'ROLLBACK_COMPLETE', 'ROLLBACK_FAILED', 'UPDATE_ROLLBACK_COMPLETE', 'UPDATE_ROLLBACK_FAILED', 'UPDATE_ROLLBACK_IN_PROGRESS', 'DELETE_COMPLETE'];
const successStatuses = ['CREATE_COMPLETE', 'UPDATE_COMPLETE'];
const deleteSuccessStatuses = ['DELETE_COMPLETE'];

async function stackExists(cf: CloudFormation, name: string): Promise<Stack | undefined> {
  const stacks = await cf.describeStacks().promise();
  if(stacks.Stacks) {
    return stacks.Stacks.find(it => it.StackName === name);
  }
}

async function deleteStack(stackName: string, command: any) {
  const region = command.region;
  const cf = new CloudFormation({region});
  let start = new Date().toISOString();
  
  try {
    const stack = await stackExists(cf, stackName);
     if(stack) {
       const deletion = cf.deleteStack({StackName: stackName.toString()}).promise();
       console.log(chalk.green(`Deleting stack named ${stackName} from ${region}`));
       const result = await deletion;
       if (result.$response.error) {
         console.log(chalk.red(result.$response.error));
       } else {
         await followStackEvents(cf, stackName, deleteSuccessStatuses, start);
       }
    }
    console.log(chalk.yellow(`No stacks named ${stackName} in ${region} to delete`));
  } catch(e) {
    if(e.message.includes("does not exist")){
      console.log(chalk.green('Delete Complete'));
    } else {
      console.error(chalk.red('Delete failed due to the following error: ' + e.message));
    }
  }
}
async function deployStack(stackName: string, templateLocation: string, fileLocation: string, command: any) {
  try {
    if(templateLocation.endsWith(".ts")) {
      require(templateLocation);
      await deploy(command.region, stackName, fileLocation, command.capabilities);
    } else {
      await deploy(command.region, stackName, templateLocation, command.capabilities);
    }
  } catch(e) {
    console.error(chalk.red(e));
  }
}
async function deploy(region: string, stackName: string, template: string, capabilities: string[]) {
  validateCapabilities(capabilities);
  const templateContent = fs.readFileSync(template);
  const cf = new CloudFormation({region});
  const stack = await stackExists(cf, stackName);
  let start = new Date().toISOString();
  
  if(stack) {
    if(successStatuses.includes(stack.StackStatus)) {
      try {
        console.log(chalk.green(`Updating existing stack in region ${region} named ${stackName}`));
        const result = await cf.updateStack({ StackName: stackName, Capabilities: capabilities, TemplateBody: templateContent.toString() }).promise();
        if (result.$response.error) {
          console.log(chalk.red(result.$response.error));
          return;
        }
      } catch(e) {
        if(e.message.includes('No updates are to be performed')){
          console.log(chalk.yellow('No updates are to be performed'));
          return;
        }
      }
    } else {
      console.log(chalk.yellow(`The stack named ${stackName} is in state ${stack.StackStatus} and cannot be updated at this time. You may need to delete it before continuing.`));
      return;
    }
  } else {
    console.log(chalk.green(`Creating stack in region ${region} named ${stackName}`));
    const result = await cf.createStack({ StackName: stackName, Capabilities: capabilities, TemplateBody: templateContent.toString() }).promise();
    if (result.$response.error) {
      console.log(chalk.red(result.$response.error));
      return
    }
  }
  await followStackEvents(cf, stackName, successStatuses, start);
}

async function wait(milliseconds: number = 300): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function stackEvents(cf: CloudFormation, name: string, start: string): Promise<StackEvent[]> {
  const events = (await cf.describeStackEvents({ StackName: name}).promise()).StackEvents;
  return events?.sort((a,b) => a.Timestamp.toString().localeCompare(b.Timestamp.toString())).filter(e => e.Timestamp.toISOString() > start) || [];
}

async function getInitialEvents(cf: CloudFormation, name: string, start: string) {
  let events: StackEvent[] = [];
  while(events.length === 0) {
    await wait();
    let next = await stackEvents(cf, name, start);events.forEach(ev => console.log(ev));
    let startingPoint = next.reverse().find(ev => ev.ResourceType === 'AWS::CloudFormation::Stack' && !terminalStatuses.includes(ev.ResourceStatus!));
    if(startingPoint) {
      events = next.slice(events.findIndex(ev => ev.EventId === startingPoint!.EventId));
    }
  }
  return events;
}

async function followStackEvents(cf: CloudFormation, name: string, success: string[], start: string): Promise<boolean> {
  let events = await getInitialEvents(cf, name, start);
  while(true) {
    events.forEach(display);
    if(events.find(it => it.ResourceType === 'AWS::CloudFormation::Stack' && terminalStatuses.includes(it.ResourceStatus!))){
      return !!events.find(it => it.ResourceType === 'AWS::CloudFormation::Stack' && success.includes(it.ResourceStatus!));
      
    }
    await wait(5000);
    if(events.length > 0) start = events.pop()!.Timestamp.toISOString();
    events = await stackEvents(cf, name, start);
  }
}

function display(e: StackEvent) {
  let color = badStatuses.includes(e.ResourceStatus!) ? chalk.red : (successStatuses.includes(e.ResourceStatus!) ? chalk.green : chalk.black);
  
  console.log(color(`${e.ResourceStatus?.padEnd(27)} ${e.LogicalResourceId} ${e.ResourceType} ${e.PhysicalResourceId} ${e.ResourceStatusReason || ''}`));
}

function validateCapabilities(capabilities: string[]) {
  const valid = ["CAPABILITY_IAM", "CAPABILITY_NAMED_IAM", "CAPABILITY_AUTO_EXPAND"];
  if(!capabilities || capabilities.length === 0) {
    console.error(chalk.red("At least one capability must be provided"));
    process.exit(1);
  }
  const errors = [...valid.map(it => {
    if(capabilities.filter(c => c === it).length > 1) {
      return `${it} can only appear once`;
    }
    return null;
  }).filter(it => !!it),
  ...capabilities.filter(it => !valid.includes(it)).map(it => `${it} is not a valid capability`)
  ];
  if(errors.length > 0) {
    errors.forEach(it => console.error(chalk.red(it)));
    process.exit(1);
  }
}
