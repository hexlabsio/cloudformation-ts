import { Value } from '../../../kloudformation/Value';

export interface NotificationConfigurationProps {
  notificationTypes?: Value<Value<string>[]>
  topicARN: Value<string>
}