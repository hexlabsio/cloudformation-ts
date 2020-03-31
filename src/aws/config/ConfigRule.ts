import { SourceProps } from './configrule/SourceProps';
import { Value } from '../../kloudformation/Value';
import { ScopeProps } from './configrule/ScopeProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type ConfigRuleAttributes = { Arn: Attribute<string>; ComplianceType: Attribute<string>; ConfigRuleId: Attribute<string> }
export function configRule(configRuleProps: ConfigRule): ConfigRule & { attributes: ConfigRuleAttributes } { return ({ ...configRuleProps, _logicalType: 'AWS::Config::ConfigRule', attributes: { Arn: 'Arn', ComplianceType: 'Compliance.Type', ConfigRuleId: 'ConfigRuleId' } }) }

export interface ConfigRule extends KloudResource {
    source: SourceProps;
    configRuleName?: Value<string>;
    description?: Value<string>;
    inputParameters?: Value<any>;
    maximumExecutionFrequency?: Value<string>;
    scope?: ScopeProps;
}