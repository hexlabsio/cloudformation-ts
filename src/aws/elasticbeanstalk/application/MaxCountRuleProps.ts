import { Value } from '../../../kloudformation/Value';

export function maxCountRuleProps(maxCountRulePropsProps: MaxCountRuleProps): MaxCountRuleProps { return (maxCountRulePropsProps) as unknown as MaxCountRuleProps }

export interface MaxCountRuleProps {
    deleteSourceFromS3?: Value<boolean>;
    enabled?: Value<boolean>;
    maxCount?: Value<number>;
}