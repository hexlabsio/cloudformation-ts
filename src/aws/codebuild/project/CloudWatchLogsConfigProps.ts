import { Value } from '../../../kloudformation/Value';

export function cloudWatchLogsConfigProps(cloudWatchLogsConfigPropsProps: CloudWatchLogsConfigProps): CloudWatchLogsConfigProps { return (cloudWatchLogsConfigPropsProps) }

export interface CloudWatchLogsConfigProps {
    status: Value<string>;
    groupName?: Value<string>;
    streamName?: Value<string>;
}