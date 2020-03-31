import { Value } from '../../../kloudformation/Value';

export function cloudWatchLoggingOptionProps(cloudWatchLoggingOptionPropsProps: CloudWatchLoggingOptionProps): CloudWatchLoggingOptionProps { return (cloudWatchLoggingOptionPropsProps) }

export interface CloudWatchLoggingOptionProps {
    logStreamARN: Value<string>;
}