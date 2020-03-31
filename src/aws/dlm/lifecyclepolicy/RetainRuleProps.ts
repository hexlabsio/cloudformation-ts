import { Value } from '../../../kloudformation/Value';

export function retainRuleProps(retainRulePropsProps: RetainRuleProps): RetainRuleProps { return (retainRulePropsProps) }

export interface RetainRuleProps {
    intervalUnit?: Value<string>;
    count?: Value<number>;
    interval?: Value<number>;
}