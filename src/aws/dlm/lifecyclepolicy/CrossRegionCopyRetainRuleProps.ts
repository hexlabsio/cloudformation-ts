import { Value } from '../../../kloudformation/Value';

export function crossRegionCopyRetainRuleProps(crossRegionCopyRetainRulePropsProps: CrossRegionCopyRetainRuleProps): CrossRegionCopyRetainRuleProps { return (crossRegionCopyRetainRulePropsProps) }

export interface CrossRegionCopyRetainRuleProps {
    intervalUnit?: Value<string>;
    interval?: Value<number>;
}