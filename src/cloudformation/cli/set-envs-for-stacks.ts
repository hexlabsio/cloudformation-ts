import { CloudFormation } from '@aws-sdk/client-cloudformation';
import chalk from 'chalk';

export async function setEnvsForStacks(
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
