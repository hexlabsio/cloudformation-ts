import { DurationProps } from './DurationProps';

export interface GrpcTimeoutProps {
  perRequest?: DurationProps
  idle?: DurationProps
}