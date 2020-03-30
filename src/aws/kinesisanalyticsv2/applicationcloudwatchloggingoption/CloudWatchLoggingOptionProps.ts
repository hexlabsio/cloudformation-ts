import { Value } from '../../../kloudformation/Value';

export function cloudWatchLoggingOptionProps(cloudWatchLoggingOptionPropsProps: CloudWatchLoggingOptionProps): CloudWatchLoggingOptionProps { return (cloudWatchLoggingOptionPropsProps) as unknown as CloudWatchLoggingOptionProps }

export interface CloudWatchLoggingOptionProps {
    logStreamARN: Value<string>;
}