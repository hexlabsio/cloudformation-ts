import { Value } from '../../../kloudformation/Value';

export function cloudwatchMetricActionProps(cloudwatchMetricActionPropsProps: CloudwatchMetricActionProps): CloudwatchMetricActionProps { return (cloudwatchMetricActionPropsProps) }

export interface CloudwatchMetricActionProps {
    metricName: Value<string>;
    metricNamespace: Value<string>;
    metricUnit: Value<string>;
    metricValue: Value<string>;
    roleArn: Value<string>;
    metricTimestamp?: Value<string>;
}