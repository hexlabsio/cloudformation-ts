import { Value } from '../../../kloudformation/Value';

export interface NotificationObjectTypeProps {
  sNSTopicArn: Value<string>
  backupVaultEvents: Value<Value<string>[]>
}