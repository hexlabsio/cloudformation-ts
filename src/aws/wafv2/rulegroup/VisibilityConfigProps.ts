import { Value } from '../../../kloudformation/Value';

export interface VisibilityConfigProps {
  sampledRequestsEnabled: Value<boolean>
  cloudWatchMetricsEnabled: Value<boolean>
  metricName: Value<string>
}