import { Value } from '../../../kloudformation/Value';

export function organizationManagedRuleMetadataProps(organizationManagedRuleMetadataPropsProps: OrganizationManagedRuleMetadataProps): OrganizationManagedRuleMetadataProps { return (organizationManagedRuleMetadataPropsProps) as unknown as OrganizationManagedRuleMetadataProps }

export interface OrganizationManagedRuleMetadataProps {
    ruleIdentifier: Value<string>;
    tagKeyScope?: Value<string>;
    tagValueScope?: Value<string>;
    description?: Value<string>;
    resourceIdScope?: Value<string>;
    resourceTypesScope?: Value<Value<string>[]>;
    maximumExecutionFrequency?: Value<string>;
    inputParameters?: Value<string>;
}