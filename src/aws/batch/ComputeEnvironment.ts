import { Value } from '../../kloudformation/Value';
import { ComputeResourcesProps } from './computeenvironment/ComputeResourcesProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ComputeEnvironmentAttributes = {  }
export function computeEnvironment(computeEnvironmentProps: ComputeEnvironment): ComputeEnvironment & { attributes: ComputeEnvironmentAttributes } { return ({ ...computeEnvironmentProps, _logicalType: 'AWS::Batch::ComputeEnvironment', attributes: {  } }) }

export interface ComputeEnvironment extends KloudResource {
    type: Value<string>;
    serviceRole: Value<string>;
    computeEnvironmentName?: Value<string>;
    computeResources?: ComputeResourcesProps;
    state?: Value<string>;
}