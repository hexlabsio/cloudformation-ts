import { Value } from '../../../kloudformation/Value';

export interface CloudwatchMetricActionProps {
  metricName: Value<string>
  metricNamespace: Value<string>
  metricTimestamp?: Value<string>
  metricUnit: Value<string>
  metricValue: Value<string>
  roleArn: Value<string>
}