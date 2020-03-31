import { Value } from '../../kloudformation/Value';
import { OrganizationManagedRuleMetadataProps } from './organizationconfigrule/OrganizationManagedRuleMetadataProps';
import { OrganizationCustomRuleMetadataProps } from './organizationconfigrule/OrganizationCustomRuleMetadataProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type OrganizationConfigRuleAttributes = {  }
export function organizationConfigRule(organizationConfigRuleProps: OrganizationConfigRule): OrganizationConfigRule & { attributes: OrganizationConfigRuleAttributes } { return ({ ...organizationConfigRuleProps, _logicalType: 'AWS::Config::OrganizationConfigRule', attributes: {  } }) }

export interface OrganizationConfigRule extends KloudResource {
    organizationConfigRuleName: Value<string>;
    organizationManagedRuleMetadata?: OrganizationManagedRuleMetadataProps;
    organizationCustomRuleMetadata?: OrganizationCustomRuleMetadataProps;
    excludedAccounts?: Value<Value<string>[]>;
}