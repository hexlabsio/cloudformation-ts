import { Value } from '../../../kloudformation/Value';

export interface NotificationProps {
  comparisonOperator: Value<string>
  notificationType: Value<string>
  threshold: Value<number>
  thresholdType?: Value<string>
}