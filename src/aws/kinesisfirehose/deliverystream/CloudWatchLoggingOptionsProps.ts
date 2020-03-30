import { Value } from '../../../kloudformation/Value';

export function cloudWatchLoggingOptionsProps(cloudWatchLoggingOptionsPropsProps: CloudWatchLoggingOptionsProps): CloudWatchLoggingOptionsProps { return (cloudWatchLoggingOptionsPropsProps) as unknown as CloudWatchLoggingOptionsProps }

export interface CloudWatchLoggingOptionsProps {
    enabled?: Value<boolean>;
    logGroupName?: Value<string>;
    logStreamName?: Value<string>;
}