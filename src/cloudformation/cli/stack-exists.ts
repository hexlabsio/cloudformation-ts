import { CloudFormation, Stack } from '@aws-sdk/client-cloudformation';

export async function stackExists(
  cf: CloudFormation,
  name: string
): Promise<Stack | undefined> {
  const stacks = await cf.describeStacks({});
  return stacks.Stacks?.find(it => it.StackName === name);
}

