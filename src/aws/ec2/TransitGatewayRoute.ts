import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function transitGatewayRoute(transitGatewayRouteProps: TransitGatewayRoute): TransitGatewayRoute { return ({ ...transitGatewayRouteProps, _logicalType: '' }) }
  
export interface TransitGatewayRoute extends KloudResource {
  transitGatewayRouteTableId: Value<string>
  destinationCidrBlock?: Value<string>
  blackhole?: Value<boolean>
  transitGatewayAttachmentId?: Value<string>
}