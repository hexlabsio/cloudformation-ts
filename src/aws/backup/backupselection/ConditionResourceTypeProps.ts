import { Value } from '../../../kloudformation/Value';

export interface ConditionResourceTypeProps {
  conditionValue: Value<string>
  conditionKey: Value<string>
  conditionType: Value<string>
}