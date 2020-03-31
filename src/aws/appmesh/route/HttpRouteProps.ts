import { HttpRouteActionProps } from './HttpRouteActionProps';
import { HttpRouteMatchProps } from './HttpRouteMatchProps';
import { HttpRetryPolicyProps } from './HttpRetryPolicyProps';

export function httpRouteProps(httpRoutePropsProps: HttpRouteProps): HttpRouteProps { return (httpRoutePropsProps) }

export interface HttpRouteProps {
    action: HttpRouteActionProps;
    match: HttpRouteMatchProps;
    retryPolicy?: HttpRetryPolicyProps;
}