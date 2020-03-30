import { WeightedTargetProps } from './WeightedTargetProps';

export function httpRouteActionProps(httpRouteActionPropsProps: HttpRouteActionProps): HttpRouteActionProps { return (httpRouteActionPropsProps) as unknown as HttpRouteActionProps }

export interface HttpRouteActionProps {
    weightedTargets: WeightedTargetProps[];
}