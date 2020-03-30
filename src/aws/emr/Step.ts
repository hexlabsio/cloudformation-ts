import { Value } from '../../kloudformation/Value';
import { HadoopJarStepConfigProps } from './step/HadoopJarStepConfigProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function step(stepProps: Step & { logicalName?: string }): Step { return ({ ...stepProps, _logicalType: 'AWS::EMR::Step' }) as unknown as Step }

export interface Step extends KloudResource {
    actionOnFailure: Value<string>;
    hadoopJarStep: HadoopJarStepConfigProps;
    jobFlowId: Value<string>;
    name: Value<string>;
}