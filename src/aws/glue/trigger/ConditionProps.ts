import { Value } from '../../../kloudformation/Value';

export function conditionProps(conditionPropsProps: ConditionProps): ConditionProps { return (conditionPropsProps) }

export interface ConditionProps {
    crawlerName?: Value<string>;
    state?: Value<string>;
    crawlState?: Value<string>;
    logicalOperator?: Value<string>;
    jobName?: Value<string>;
}