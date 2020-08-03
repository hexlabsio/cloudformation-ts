import { OrganizationManagedRuleMetadataProps } from './organizationConfigRule/OrganizationManagedRuleMetadataProps';
import { Value } from '../../kloudformation/Value';
import { OrganizationCustomRuleMetadataProps } from './organizationConfigRule/OrganizationCustomRuleMetadataProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function organizationConfigRule(organizationConfigRuleProps: OrganizationConfigRule): OrganizationConfigRule { return ({ ...organizationConfigRuleProps, _logicalType: '' }) }
  
export interface OrganizationConfigRule extends KloudResource {
  organizationManagedRuleMetadata?: OrganizationManagedRuleMetadataProps
  organizationConfigRuleName: Value<string>
  organizationCustomRuleMetadata?: OrganizationCustomRuleMetadataProps
  excludedAccounts?: Value<Value<string>[]>
}