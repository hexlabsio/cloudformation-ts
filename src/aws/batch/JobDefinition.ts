import { Value } from '../../kloudformation/Value';
import { NodePropertiesProps } from './jobDefinition/NodePropertiesProps';
import { TimeoutProps } from './jobDefinition/TimeoutProps';
import { ContainerPropertiesProps } from './jobDefinition/ContainerPropertiesProps';
import { RetryStrategyProps } from './jobDefinition/RetryStrategyProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function jobDefinition(jobDefinitionProps: JobDefinition): JobDefinition { return ({ ...jobDefinitionProps, _logicalType: '' }) }
  
export interface JobDefinition extends KloudResource {
  type: Value<string>
  parameters?: Value<any>
  nodeProperties?: NodePropertiesProps
  timeout?: TimeoutProps
  containerProperties?: ContainerPropertiesProps
  jobDefinitionName?: Value<string>
  retryStrategy?: RetryStrategyProps
}