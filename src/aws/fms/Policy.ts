import { Value } from '../../kloudformation/Value';
import { IEMapProps } from './policy/IEMapProps';
import { ResourceTagProps } from './policy/ResourceTagProps';
import { PolicyTagProps } from './policy/PolicyTagProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type PolicyAttributes = { Id: Attribute<string>; Arn: Attribute<string> }
export function policy(policyProps: Policy): Policy & { attributes: PolicyAttributes } { return ({ ...policyProps, _logicalType: 'AWS::FMS::Policy', attributes: { Id: 'Id', Arn: 'Arn' } }) }

export interface Policy extends KloudResource {
    excludeResourceTags: Value<boolean>;
    policyName: Value<string>;
    remediationEnabled: Value<boolean>;
    resourceType: Value<string>;
    securityServicePolicyData: Value<any>;
    excludeMap?: IEMapProps;
    includeMap?: IEMapProps;
    resourceTags?: ResourceTagProps[];
    resourceTypeList?: Value<Value<string>[]>;
    deleteAllPolicyResources?: Value<boolean>;
    tags?: PolicyTagProps[];
}