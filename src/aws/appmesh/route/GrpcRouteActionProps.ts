import { WeightedTargetProps } from './WeightedTargetProps';

export function grpcRouteActionProps(grpcRouteActionPropsProps: GrpcRouteActionProps): GrpcRouteActionProps { return (grpcRouteActionPropsProps) as unknown as GrpcRouteActionProps }

export interface GrpcRouteActionProps {
    weightedTargets: WeightedTargetProps[];
}