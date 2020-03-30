import { HadoopJarStepConfigProps } from './HadoopJarStepConfigProps';
import { Value } from '../../../kloudformation/Value';

export function stepConfigProps(stepConfigPropsProps: StepConfigProps): StepConfigProps { return (stepConfigPropsProps) as unknown as StepConfigProps }

export interface StepConfigProps {
    hadoopJarStep: HadoopJarStepConfigProps;
    name: Value<string>;
    actionOnFailure?: Value<string>;
}