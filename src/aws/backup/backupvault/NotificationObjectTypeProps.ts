import { Value } from '../../../kloudformation/Value';

export function notificationObjectTypeProps(notificationObjectTypePropsProps: NotificationObjectTypeProps): NotificationObjectTypeProps { return (notificationObjectTypePropsProps) as unknown as NotificationObjectTypeProps }

export interface NotificationObjectTypeProps {
    sNSTopicArn: Value<string>;
    backupVaultEvents: Value<Value<string>[]>;
}