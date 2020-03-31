import { S3KeyFilterProps } from './S3KeyFilterProps';

export function notificationFilterProps(notificationFilterPropsProps: NotificationFilterProps): NotificationFilterProps { return (notificationFilterPropsProps) }

export interface NotificationFilterProps {
    s3Key: S3KeyFilterProps;
}