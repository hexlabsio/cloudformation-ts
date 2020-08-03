import { IEMapProps } from './policy/IEMapProps';
import { Value } from '../../kloudformation/Value';
import { ResourceTagProps } from './policy/ResourceTagProps';
import { PolicyTagProps } from './policy/PolicyTagProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type PolicyAttributes = { Id: Attribute<string>;Arn: Attribute<string> }
export function policy(policyProps: Policy): Policy & {attributes: PolicyAttributes} { return ({ ...policyProps, _logicalType: 'AWS::FMS::Policy', attributes: { Id: 'Id',Arn: 'Arn' } }) }
   
export interface Policy extends KloudResource {
  excludeMap?: IEMapProps
  excludeResourceTags: Value<boolean>
  includeMap?: IEMapProps
  policyName: Value<string>
  remediationEnabled: Value<boolean>
  resourceTags?: ResourceTagProps[]
  resourceType: Value<string>
  resourceTypeList?: Value<Value<string>[]>
  securityServicePolicyData: Value<any>
  deleteAllPolicyResources?: Value<boolean>
  tags?: PolicyTagProps[]
}