import { Value } from '../../../kloudformation/Value';

export function organizationCustomRuleMetadataProps(organizationCustomRuleMetadataPropsProps: OrganizationCustomRuleMetadataProps): OrganizationCustomRuleMetadataProps { return (organizationCustomRuleMetadataPropsProps) }

export interface OrganizationCustomRuleMetadataProps {
    lambdaFunctionArn: Value<string>;
    organizationConfigRuleTriggerTypes: Value<Value<string>[]>;
    tagKeyScope?: Value<string>;
    tagValueScope?: Value<string>;
    description?: Value<string>;
    resourceIdScope?: Value<string>;
    resourceTypesScope?: Value<Value<string>[]>;
    maximumExecutionFrequency?: Value<string>;
    inputParameters?: Value<string>;
}