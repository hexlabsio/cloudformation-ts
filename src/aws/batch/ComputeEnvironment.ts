import { Value } from '../../kloudformation/Value';
import { ComputeResourcesProps } from './computeEnvironment/ComputeResourcesProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function computeEnvironment(computeEnvironmentProps: ComputeEnvironment): ComputeEnvironment { return ({ ...computeEnvironmentProps, _logicalType: '' }) }
  
export interface ComputeEnvironment extends KloudResource {
  type: Value<string>
  serviceRole: Value<string>
  computeEnvironmentName?: Value<string>
  computeResources?: ComputeResourcesProps
  state?: Value<string>
}