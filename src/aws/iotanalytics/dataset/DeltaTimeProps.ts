import { Value } from '../../../kloudformation/Value';

export interface DeltaTimeProps {
  timeExpression: Value<string>
  offsetSeconds: Value<number>
}