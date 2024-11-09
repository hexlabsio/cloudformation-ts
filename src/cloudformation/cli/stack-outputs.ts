import { printStackOutputs } from './print-stack-outputs';

export async function getStackOutputs(
  command: any
): Promise<void> {
  try {
    const stacks: string[] = command.stackInfo ?? [];
    await printStackOutputs(stacks, command.region, command.outputFile);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}
