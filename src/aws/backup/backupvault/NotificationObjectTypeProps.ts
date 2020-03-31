import { Value } from '../../../kloudformation/Value';

export function notificationObjectTypeProps(notificationObjectTypePropsProps: NotificationObjectTypeProps): NotificationObjectTypeProps { return (notificationObjectTypePropsProps) }

export interface NotificationObjectTypeProps {
    sNSTopicArn: Value<string>;
    backupVaultEvents: Value<Value<string>[]>;
}