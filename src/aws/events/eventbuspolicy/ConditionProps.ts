import { Value } from '../../../kloudformation/Value';

export function conditionProps(conditionPropsProps: ConditionProps): ConditionProps { return (conditionPropsProps) as unknown as ConditionProps }

export interface ConditionProps {
    type?: Value<string>;
    value?: Value<string>;
    key?: Value<string>;
}