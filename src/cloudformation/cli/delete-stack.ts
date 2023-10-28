import { CloudFormation } from '@aws-sdk/client-cloudformation';
import chalk from 'chalk';
import { followStackEvents } from './follow-stack-events';
import { stackExists } from './stack-exists';

const deleteSuccessStatuses = ["DELETE_COMPLETE"];

export async function deleteStack(stackName: string, command: any) {
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
