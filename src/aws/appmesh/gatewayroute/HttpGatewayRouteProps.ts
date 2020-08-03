import { HttpGatewayRouteActionProps } from './HttpGatewayRouteActionProps';
import { HttpGatewayRouteMatchProps } from './HttpGatewayRouteMatchProps';

export interface HttpGatewayRouteProps {
  action: HttpGatewayRouteActionProps
  match: HttpGatewayRouteMatchProps
}