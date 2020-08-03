import { HttpGatewayRouteProps } from './HttpGatewayRouteProps';
import { GrpcGatewayRouteProps } from './GrpcGatewayRouteProps';

export interface GatewayRouteSpecProps {
  httpRoute?: HttpGatewayRouteProps
  http2Route?: HttpGatewayRouteProps
  grpcRoute?: GrpcGatewayRouteProps
}