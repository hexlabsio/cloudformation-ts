import { SourceProps } from './configrule/SourceProps';
import { Value } from '../../kloudformation/Value';
import { ScopeProps } from './configrule/ScopeProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function configRule(configRuleProps: ConfigRule & { logicalName?: string }): ConfigRule { return ({ ...configRuleProps, _logicalType: 'AWS::Config::ConfigRule' }) as unknown as ConfigRule }

export interface ConfigRule extends KloudResource {
    source: SourceProps;
    configRuleName?: Value<string>;
    description?: Value<string>;
    inputParameters?: Value<any>;
    maximumExecutionFrequency?: Value<string>;
    scope?: ScopeProps;
}