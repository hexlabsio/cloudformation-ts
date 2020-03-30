import { Value } from '../../../kloudformation/Value';

export function mappingRuleProps(mappingRulePropsProps: MappingRuleProps): MappingRuleProps { return (mappingRulePropsProps) as unknown as MappingRuleProps }

export interface MappingRuleProps {
    matchType: Value<string>;
    value: Value<string>;
    claim: Value<string>;
    roleARN: Value<string>;
}