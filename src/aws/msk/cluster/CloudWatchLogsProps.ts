import { Value } from '../../../kloudformation/Value';

export function cloudWatchLogsProps(cloudWatchLogsPropsProps: CloudWatchLogsProps): CloudWatchLogsProps { return (cloudWatchLogsPropsProps) }

export interface CloudWatchLogsProps {
    enabled: Value<boolean>;
    logGroup?: Value<string>;
}