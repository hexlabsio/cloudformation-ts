import { Value } from '../../../kloudformation/Value';

export function logPublishingOptionProps(logPublishingOptionPropsProps: LogPublishingOptionProps): LogPublishingOptionProps { return (logPublishingOptionPropsProps) as unknown as LogPublishingOptionProps }

export interface LogPublishingOptionProps {
    cloudWatchLogsLogGroupArn?: Value<string>;
    enabled?: Value<boolean>;
}