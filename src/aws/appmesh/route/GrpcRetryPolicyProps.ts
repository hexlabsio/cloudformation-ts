import { Value } from '../../../kloudformation/Value';
import { DurationProps } from './DurationProps';

export interface GrpcRetryPolicyProps {
  maxRetries: Value<number>
  perRetryTimeout: DurationProps
  grpcRetryEvents?: Value<Value<string>[]>
  httpRetryEvents?: Value<Value<string>[]>
  tcpRetryEvents?: Value<Value<string>[]>
}