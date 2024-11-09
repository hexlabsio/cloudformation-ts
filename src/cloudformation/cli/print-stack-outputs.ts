import chalk from 'chalk';
import fs from 'fs';
import { setEnvsForStacks } from './set-envs-for-stacks';

export async function printStackOutputs(
  stacks: string[],
  region: string,
  outputFile?: string,
  envs?: { [key: string]: string }
) {
  if (outputFile) {
    const stackEnvs = await setEnvsForStacks(stacks, region);
    const allEnvs = { ...envs, ...stackEnvs };
    const lines = Object.keys(allEnvs)
      .map((envKey) => `${envKey}='${allEnvs[envKey]}'`)
      .join("\n");
    console.log(chalk.green("Printing Stack outputs to " + outputFile));
    fs.writeFileSync(outputFile, lines);
  } else {
    console.log(chalk.red("No output file supplied"));
  }
}
