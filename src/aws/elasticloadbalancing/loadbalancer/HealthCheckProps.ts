import { Value } from '../../../kloudformation/Value';

export interface HealthCheckProps {
  healthyThreshold: Value<string>
  interval: Value<string>
  target: Value<string>
  timeout: Value<string>
  unhealthyThreshold: Value<string>
}