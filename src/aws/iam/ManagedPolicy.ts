import { Value } from '../../kloudformation/Value';
import { PolicyDocument } from '../../kloudformation/iam/PolicyDocument';
import { KloudResource } from '../../kloudformation/KloudResource';
export function managedPolicy(managedPolicyProps: ManagedPolicy): ManagedPolicy { return ({ ...managedPolicyProps, _logicalType: '' }) }
  
export interface ManagedPolicy extends KloudResource {
  description?: Value<string>
  groups?: Value<Value<string>[]>
  managedPolicyName?: Value<string>
  path?: Value<string>
  policyDocument: Value<PolicyDocument>
  roles?: Value<Value<string>[]>
  users?: Value<Value<string>[]>
}