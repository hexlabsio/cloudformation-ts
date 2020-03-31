import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type TransitGatewayRouteAttributes = {  }
export function transitGatewayRoute(transitGatewayRouteProps: TransitGatewayRoute): TransitGatewayRoute & { attributes: TransitGatewayRouteAttributes } { return ({ ...transitGatewayRouteProps, _logicalType: 'AWS::EC2::TransitGatewayRoute', attributes: {  } }) }

export interface TransitGatewayRoute extends KloudResource {
    transitGatewayRouteTableId: Value<string>;
    destinationCidrBlock?: Value<string>;
    blackhole?: Value<boolean>;
    transitGatewayAttachmentId?: Value<string>;
}