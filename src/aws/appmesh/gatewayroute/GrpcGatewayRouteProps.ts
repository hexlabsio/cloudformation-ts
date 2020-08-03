import { GrpcGatewayRouteActionProps } from './GrpcGatewayRouteActionProps';
import { GrpcGatewayRouteMatchProps } from './GrpcGatewayRouteMatchProps';

export interface GrpcGatewayRouteProps {
  action: GrpcGatewayRouteActionProps
  match: GrpcGatewayRouteMatchProps
}