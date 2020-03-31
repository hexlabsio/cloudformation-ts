import { Value } from '../../../kloudformation/Value';

export function conditionProps(conditionPropsProps: ConditionProps): ConditionProps { return (conditionPropsProps) }

export interface ConditionProps {
    type?: Value<string>;
    value?: Value<string>;
    key?: Value<string>;
}