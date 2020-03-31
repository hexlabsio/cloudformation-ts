import { WeightedTargetProps } from './WeightedTargetProps';

export function httpRouteActionProps(httpRouteActionPropsProps: HttpRouteActionProps): HttpRouteActionProps { return (httpRouteActionPropsProps) }

export interface HttpRouteActionProps {
    weightedTargets: WeightedTargetProps[];
}