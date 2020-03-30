import { Value } from '../../kloudformation/Value';
import { OrganizationManagedRuleMetadataProps } from './organizationconfigrule/OrganizationManagedRuleMetadataProps';
import { OrganizationCustomRuleMetadataProps } from './organizationconfigrule/OrganizationCustomRuleMetadataProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function organizationConfigRule(organizationConfigRuleProps: OrganizationConfigRule & { logicalName?: string }): OrganizationConfigRule { return ({ ...organizationConfigRuleProps, _logicalType: 'AWS::Config::OrganizationConfigRule' }) as unknown as OrganizationConfigRule }

export interface OrganizationConfigRule extends KloudResource {
    organizationConfigRuleName: Value<string>;
    organizationManagedRuleMetadata?: OrganizationManagedRuleMetadataProps;
    organizationCustomRuleMetadata?: OrganizationCustomRuleMetadataProps;
    excludedAccounts?: Value<Value<string>[]>;
}