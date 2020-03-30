import { Value } from '../../../kloudformation/Value';

export function cloudWatchLogsProps(cloudWatchLogsPropsProps: CloudWatchLogsProps): CloudWatchLogsProps { return (cloudWatchLogsPropsProps) as unknown as CloudWatchLogsProps }

export interface CloudWatchLogsProps {
    enabled: Value<boolean>;
    logGroup?: Value<string>;
}