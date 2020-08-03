import { TcpTimeoutProps } from './TcpTimeoutProps';
import { HttpTimeoutProps } from './HttpTimeoutProps';
import { GrpcTimeoutProps } from './GrpcTimeoutProps';

export interface ListenerTimeoutProps {
  tCP?: TcpTimeoutProps
  hTTP2?: HttpTimeoutProps
  hTTP?: HttpTimeoutProps
  gRPC?: GrpcTimeoutProps
}