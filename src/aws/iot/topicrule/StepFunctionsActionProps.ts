import { Value } from '../../../kloudformation/Value';

export function stepFunctionsActionProps(stepFunctionsActionPropsProps: StepFunctionsActionProps): StepFunctionsActionProps { return (stepFunctionsActionPropsProps) as unknown as StepFunctionsActionProps }

export interface StepFunctionsActionProps {
    roleArn: Value<string>;
    stateMachineName: Value<string>;
    executionNamePrefix?: Value<string>;
}