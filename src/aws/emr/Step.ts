import { Value } from '../../kloudformation/Value';
import { HadoopJarStepConfigProps } from './step/HadoopJarStepConfigProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type StepAttributes = {  }
export function step(stepProps: Step): Step & { attributes: StepAttributes } { return ({ ...stepProps, _logicalType: 'AWS::EMR::Step', attributes: {  } }) }

export interface Step extends KloudResource {
    actionOnFailure: Value<string>;
    hadoopJarStep: HadoopJarStepConfigProps;
    jobFlowId: Value<string>;
    name: Value<string>;
}