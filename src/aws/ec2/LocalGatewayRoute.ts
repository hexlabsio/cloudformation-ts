import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function localGatewayRoute(localGatewayRouteProps: LocalGatewayRoute & { logicalName?: string }): LocalGatewayRoute { return ({ ...localGatewayRouteProps, _logicalType: 'AWS::EC2::LocalGatewayRoute' }) as unknown as LocalGatewayRoute }

export interface LocalGatewayRoute extends KloudResource {
    destinationCidrBlock: Value<string>;
    localGatewayRouteTableId: Value<string>;
    localGatewayVirtualInterfaceGroupId: Value<string>;
}