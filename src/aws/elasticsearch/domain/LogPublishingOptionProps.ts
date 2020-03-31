import { Value } from '../../../kloudformation/Value';

export function logPublishingOptionProps(logPublishingOptionPropsProps: LogPublishingOptionProps): LogPublishingOptionProps { return (logPublishingOptionPropsProps) }

export interface LogPublishingOptionProps {
    cloudWatchLogsLogGroupArn?: Value<string>;
    enabled?: Value<boolean>;
}