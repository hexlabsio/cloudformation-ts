import { Value } from '../../../kloudformation/Value';

export interface HealthCheckConfigProps {
  type: Value<string>
  resourcePath?: Value<string>
  failureThreshold?: Value<number>
}