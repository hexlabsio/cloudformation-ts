import { GrpcRouteActionProps } from './GrpcRouteActionProps';
import { GrpcTimeoutProps } from './GrpcTimeoutProps';
import { GrpcRetryPolicyProps } from './GrpcRetryPolicyProps';
import { GrpcRouteMatchProps } from './GrpcRouteMatchProps';

export interface GrpcRouteProps {
  action: GrpcRouteActionProps
  timeout?: GrpcTimeoutProps
  retryPolicy?: GrpcRetryPolicyProps
  match: GrpcRouteMatchProps
}