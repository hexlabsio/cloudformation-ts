import { Value } from '../../kloudformation/Value';
import { PolicyDocument } from '../../kloudformation/iam/PolicyDocument';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type PolicyAttributes = { Arn: Attribute<string> }
export function policy(policyProps: Policy): Policy & {attributes: PolicyAttributes} { return ({ ...policyProps, _logicalType: 'AWS::IoT::Policy', attributes: { Arn: 'Arn' } }) }
   
export interface Policy extends KloudResource {
  policyDocument: Value<PolicyDocument>
  policyName?: Value<string>
}