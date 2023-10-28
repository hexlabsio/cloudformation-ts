import chalk from 'chalk';
import tsNode from 'ts-node';
import { setEnvsForStacks } from './set-envs-for-stacks';

async function requireFile(location: string): Promise<any> {
  try {
    return await import(location + `?update=${Math.random()}`);
  } catch (e) {
    console.log(chalk.red("Failed to require file"));
    console.log(e);
    process.exit(1);
  }
}
export async function generateStackCli(
  templateLocation: string,command: any
): Promise<void> {
  try {
    await generateStack(templateLocation, command);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

export async function generateStack(
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