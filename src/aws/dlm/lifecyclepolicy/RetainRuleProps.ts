import { Value } from '../../../kloudformation/Value';

export function retainRuleProps(retainRulePropsProps: RetainRuleProps): RetainRuleProps { return (retainRulePropsProps) as unknown as RetainRuleProps }

export interface RetainRuleProps {
    intervalUnit?: Value<string>;
    count?: Value<number>;
    interval?: Value<number>;
}