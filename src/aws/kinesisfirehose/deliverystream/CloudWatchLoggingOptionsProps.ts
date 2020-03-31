import { Value } from '../../../kloudformation/Value';

export function cloudWatchLoggingOptionsProps(cloudWatchLoggingOptionsPropsProps: CloudWatchLoggingOptionsProps): CloudWatchLoggingOptionsProps { return (cloudWatchLoggingOptionsPropsProps) }

export interface CloudWatchLoggingOptionsProps {
    enabled?: Value<boolean>;
    logGroupName?: Value<string>;
    logStreamName?: Value<string>;
}