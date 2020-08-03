import { Value } from '../../../kloudformation/Value';

export interface StepFunctionsActionProps {
  executionNamePrefix?: Value<string>
  roleArn: Value<string>
  stateMachineName: Value<string>
}