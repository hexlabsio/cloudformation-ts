import { Value } from '../../../kloudformation/Value';

export function maxAgeRuleProps(maxAgeRulePropsProps: MaxAgeRuleProps): MaxAgeRuleProps { return (maxAgeRulePropsProps) }

export interface MaxAgeRuleProps {
    deleteSourceFromS3?: Value<boolean>;
    enabled?: Value<boolean>;
    maxAgeInDays?: Value<number>;
}