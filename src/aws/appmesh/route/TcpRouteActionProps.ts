import { WeightedTargetProps } from './WeightedTargetProps';

export function tcpRouteActionProps(tcpRouteActionPropsProps: TcpRouteActionProps): TcpRouteActionProps { return (tcpRouteActionPropsProps) }

export interface TcpRouteActionProps {
    weightedTargets: WeightedTargetProps[];
}