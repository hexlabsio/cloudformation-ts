import { HttpRouteProps } from './HttpRouteProps';
import { Value } from '../../../kloudformation/Value';
import { GrpcRouteProps } from './GrpcRouteProps';
import { TcpRouteProps } from './TcpRouteProps';

export interface RouteSpecProps {
  httpRoute?: HttpRouteProps
  priority?: Value<number>
  http2Route?: HttpRouteProps
  grpcRoute?: GrpcRouteProps
  tcpRoute?: TcpRouteProps
}