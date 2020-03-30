import { Value } from '../../../kloudformation/Value';

export function conditionResourceTypeProps(conditionResourceTypePropsProps: ConditionResourceTypeProps): ConditionResourceTypeProps { return (conditionResourceTypePropsProps) as unknown as ConditionResourceTypeProps }

export interface ConditionResourceTypeProps {
    conditionValue: Value<string>;
    conditionKey: Value<string>;
    conditionType: Value<string>;
}