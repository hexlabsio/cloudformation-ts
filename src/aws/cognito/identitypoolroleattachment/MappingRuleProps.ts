import { Value } from '../../../kloudformation/Value';

export function mappingRuleProps(mappingRulePropsProps: MappingRuleProps): MappingRuleProps { return (mappingRulePropsProps) }

export interface MappingRuleProps {
    matchType: Value<string>;
    value: Value<string>;
    claim: Value<string>;
    roleARN: Value<string>;
}