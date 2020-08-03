import { Value } from '../../kloudformation/Value';
import { PolicyDocument } from '../../kloudformation/iam/PolicyDocument';
import { KloudResource } from '../../kloudformation/KloudResource';
export function policy(policyProps: Policy): Policy { return ({ ...policyProps, _logicalType: '' }) }
  
export interface Policy extends KloudResource {
  groups?: Value<Value<string>[]>
  policyDocument: Value<PolicyDocument>
  policyName: Value<string>
  roles?: Value<Value<string>[]>
  users?: Value<Value<string>[]>
}