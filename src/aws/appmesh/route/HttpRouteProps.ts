import { HttpRouteActionProps } from './HttpRouteActionProps';
import { HttpTimeoutProps } from './HttpTimeoutProps';
import { HttpRetryPolicyProps } from './HttpRetryPolicyProps';
import { HttpRouteMatchProps } from './HttpRouteMatchProps';

export interface HttpRouteProps {
  action: HttpRouteActionProps
  timeout?: HttpTimeoutProps
  retryPolicy?: HttpRetryPolicyProps
  match: HttpRouteMatchProps
}