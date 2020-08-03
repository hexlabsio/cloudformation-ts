import { Value } from '../../../kloudformation/Value';

export interface HealthCheckProps {
  command?: Value<Value<string>[]>
  interval?: Value<number>
  timeout?: Value<number>
  retries?: Value<number>
  startPeriod?: Value<number>
}