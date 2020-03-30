import { Value } from '../../../kloudformation/Value';

export function conditionProps(conditionPropsProps: ConditionProps): ConditionProps { return (conditionPropsProps) as unknown as ConditionProps }

export interface ConditionProps {
    crawlerName?: Value<string>;
    state?: Value<string>;
    crawlState?: Value<string>;
    logicalOperator?: Value<string>;
    jobName?: Value<string>;
}