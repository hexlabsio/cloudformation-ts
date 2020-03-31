import { TcpRouteActionProps } from './TcpRouteActionProps';

export function tcpRouteProps(tcpRoutePropsProps: TcpRouteProps): TcpRouteProps { return (tcpRoutePropsProps) }

export interface TcpRouteProps {
    action: TcpRouteActionProps;
}