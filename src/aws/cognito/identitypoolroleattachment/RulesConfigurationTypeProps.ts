import { MappingRuleProps } from './MappingRuleProps';

export function rulesConfigurationTypeProps(rulesConfigurationTypePropsProps: RulesConfigurationTypeProps): RulesConfigurationTypeProps { return (rulesConfigurationTypePropsProps) as unknown as RulesConfigurationTypeProps }

export interface RulesConfigurationTypeProps {
    rules: MappingRuleProps[];
}