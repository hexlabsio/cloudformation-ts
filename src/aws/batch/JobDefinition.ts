import { Value } from '../../kloudformation/Value';
import { NodePropertiesProps } from './jobdefinition/NodePropertiesProps';
import { TimeoutProps } from './jobdefinition/TimeoutProps';
import { ContainerPropertiesProps } from './jobdefinition/ContainerPropertiesProps';
import { RetryStrategyProps } from './jobdefinition/RetryStrategyProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function jobDefinition(jobDefinitionProps: JobDefinition & { logicalName?: string }): JobDefinition { return ({ ...jobDefinitionProps, _logicalType: 'AWS::Batch::JobDefinition' }) as unknown as JobDefinition }

export interface JobDefinition extends KloudResource {
    type: Value<string>;
    parameters?: Value<any>;
    nodeProperties?: NodePropertiesProps;
    timeout?: TimeoutProps;
    containerProperties?: ContainerPropertiesProps;
    jobDefinitionName?: Value<string>;
    retryStrategy?: RetryStrategyProps;
}