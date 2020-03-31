import { Value } from '../../../kloudformation/Value';

export function cloudWatchLogsLogGroupProps(cloudWatchLogsLogGroupPropsProps: CloudWatchLogsLogGroupProps): CloudWatchLogsLogGroupProps { return (cloudWatchLogsLogGroupPropsProps) }

export interface CloudWatchLogsLogGroupProps {
    logGroupArn: Value<string>;
}