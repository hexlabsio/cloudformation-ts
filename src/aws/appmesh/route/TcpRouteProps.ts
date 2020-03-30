import { TcpRouteActionProps } from './TcpRouteActionProps';

export function tcpRouteProps(tcpRoutePropsProps: TcpRouteProps): TcpRouteProps { return (tcpRoutePropsProps) as unknown as TcpRouteProps }

export interface TcpRouteProps {
    action: TcpRouteActionProps;
}