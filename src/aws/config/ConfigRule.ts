import { Value } from '../../kloudformation/Value';
import { ScopeProps } from './configRule/ScopeProps';
import { SourceProps } from './configRule/SourceProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ConfigRuleAttributes = { Arn: Attribute<string>;ComplianceType: Attribute<string>;ConfigRuleId: Attribute<string> }
export function configRule(configRuleProps: ConfigRule): ConfigRule & {attributes: ConfigRuleAttributes} { return ({ ...configRuleProps, _logicalType: 'AWS::Config::ConfigRule', attributes: { Arn: 'Arn',ComplianceType: 'Compliance.Type',ConfigRuleId: 'ConfigRuleId' } }) }
   
export interface ConfigRule extends KloudResource {
  configRuleName?: Value<string>
  description?: Value<string>
  inputParameters?: Value<any>
  maximumExecutionFrequency?: Value<string>
  scope?: ScopeProps
  source: SourceProps
}