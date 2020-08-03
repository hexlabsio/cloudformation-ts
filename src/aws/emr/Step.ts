import { Value } from '../../kloudformation/Value';
import { HadoopJarStepConfigProps } from './step/HadoopJarStepConfigProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function step(stepProps: Step): Step { return ({ ...stepProps, _logicalType: '' }) }
  
export interface Step extends KloudResource {
  actionOnFailure: Value<string>
  hadoopJarStep: HadoopJarStepConfigProps
  jobFlowId: Value<string>
  name: Value<string>
}