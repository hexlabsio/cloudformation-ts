import { Value } from '../../../kloudformation/Value';

export interface OrganizationCustomRuleMetadataProps {
  tagKeyScope?: Value<string>
  tagValueScope?: Value<string>
  description?: Value<string>
  resourceIdScope?: Value<string>
  lambdaFunctionArn: Value<string>
  organizationConfigRuleTriggerTypes: Value<Value<string>[]>
  resourceTypesScope?: Value<Value<string>[]>
  maximumExecutionFrequency?: Value<string>
  inputParameters?: Value<string>
}