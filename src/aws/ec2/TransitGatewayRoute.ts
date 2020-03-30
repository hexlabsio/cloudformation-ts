import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function transitGatewayRoute(transitGatewayRouteProps: TransitGatewayRoute & { logicalName?: string }): TransitGatewayRoute { return ({ ...transitGatewayRouteProps, _logicalType: 'AWS::EC2::TransitGatewayRoute' }) as unknown as TransitGatewayRoute }

export interface TransitGatewayRoute extends KloudResource {
    transitGatewayRouteTableId: Value<string>;
    destinationCidrBlock?: Value<string>;
    blackhole?: Value<boolean>;
    transitGatewayAttachmentId?: Value<string>;
}