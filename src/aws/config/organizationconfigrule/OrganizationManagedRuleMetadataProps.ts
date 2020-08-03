import { Value } from '../../../kloudformation/Value';

export interface OrganizationManagedRuleMetadataProps {
  tagKeyScope?: Value<string>
  tagValueScope?: Value<string>
  description?: Value<string>
  resourceIdScope?: Value<string>
  ruleIdentifier: Value<string>
  resourceTypesScope?: Value<Value<string>[]>
  maximumExecutionFrequency?: Value<string>
  inputParameters?: Value<string>
}