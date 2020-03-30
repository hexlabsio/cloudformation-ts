import { Value } from '../../../kloudformation/Value';

export function conditionProps(conditionPropsProps: ConditionProps): ConditionProps { return (conditionPropsProps) as unknown as ConditionProps }

export interface ConditionProps {
    lt?: Value<number>;
    gte?: Value<number>;
    neq?: Value<Value<string>[]>;
    eq?: Value<Value<string>[]>;
    lte?: Value<number>;
}