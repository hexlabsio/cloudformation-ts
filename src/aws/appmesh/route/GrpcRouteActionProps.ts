import { WeightedTargetProps } from './WeightedTargetProps';

export function grpcRouteActionProps(grpcRouteActionPropsProps: GrpcRouteActionProps): GrpcRouteActionProps { return (grpcRouteActionPropsProps) }

export interface GrpcRouteActionProps {
    weightedTargets: WeightedTargetProps[];
}