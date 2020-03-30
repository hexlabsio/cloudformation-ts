import { Value } from '../../kloudformation/Value';
import { ComputeResourcesProps } from './computeenvironment/ComputeResourcesProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function computeEnvironment(computeEnvironmentProps: ComputeEnvironment & { logicalName?: string }): ComputeEnvironment { return ({ ...computeEnvironmentProps, _logicalType: 'AWS::Batch::ComputeEnvironment' }) as unknown as ComputeEnvironment }

export interface ComputeEnvironment extends KloudResource {
    type: Value<string>;
    serviceRole: Value<string>;
    computeEnvironmentName?: Value<string>;
    computeResources?: ComputeResourcesProps;
    state?: Value<string>;
}