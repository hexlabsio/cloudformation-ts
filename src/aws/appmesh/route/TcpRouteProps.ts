import { TcpRouteActionProps } from './TcpRouteActionProps';
import { TcpTimeoutProps } from './TcpTimeoutProps';

export interface TcpRouteProps {
  action: TcpRouteActionProps
  timeout?: TcpTimeoutProps
}