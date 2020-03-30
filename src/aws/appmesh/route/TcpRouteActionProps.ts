import { WeightedTargetProps } from './WeightedTargetProps';

export function tcpRouteActionProps(tcpRouteActionPropsProps: TcpRouteActionProps): TcpRouteActionProps { return (tcpRouteActionPropsProps) as unknown as TcpRouteActionProps }

export interface TcpRouteActionProps {
    weightedTargets: WeightedTargetProps[];
}