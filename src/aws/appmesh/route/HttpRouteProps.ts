import { HttpRouteActionProps } from './HttpRouteActionProps';
import { HttpRouteMatchProps } from './HttpRouteMatchProps';
import { HttpRetryPolicyProps } from './HttpRetryPolicyProps';

export function httpRouteProps(httpRoutePropsProps: HttpRouteProps): HttpRouteProps { return (httpRoutePropsProps) as unknown as HttpRouteProps }

export interface HttpRouteProps {
    action: HttpRouteActionProps;
    match: HttpRouteMatchProps;
    retryPolicy?: HttpRetryPolicyProps;
}