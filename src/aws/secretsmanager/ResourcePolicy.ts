import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function resourcePolicy(resourcePolicyProps: ResourcePolicy): ResourcePolicy { return ({ ...resourcePolicyProps, _logicalType: '' }) }
  
export interface ResourcePolicy extends KloudResource {
  secretId: Value<string>
  resourcePolicy: Value<any>
}