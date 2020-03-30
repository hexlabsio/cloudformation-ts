import { Value } from '../../../kloudformation/Value';

export function cloudWatchLogsLogGroupProps(cloudWatchLogsLogGroupPropsProps: CloudWatchLogsLogGroupProps): CloudWatchLogsLogGroupProps { return (cloudWatchLogsLogGroupPropsProps) as unknown as CloudWatchLogsLogGroupProps }

export interface CloudWatchLogsLogGroupProps {
    logGroupArn: Value<string>;
}