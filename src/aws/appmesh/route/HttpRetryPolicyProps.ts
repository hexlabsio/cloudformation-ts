import { Value } from '../../../kloudformation/Value';
import { DurationProps } from './DurationProps';

export interface HttpRetryPolicyProps {
  maxRetries: Value<number>
  perRetryTimeout: DurationProps
  httpRetryEvents?: Value<Value<string>[]>
  tcpRetryEvents?: Value<Value<string>[]>
}