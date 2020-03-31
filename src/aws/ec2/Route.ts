import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type RouteAttributes = {  }
export function route(routeProps: Route): Route & { attributes: RouteAttributes } { return ({ ...routeProps, _logicalType: 'AWS::EC2::Route', attributes: {  } }) }

export interface Route extends KloudResource {
    routeTableId: Value<string>;
    destinationCidrBlock?: Value<string>;
    destinationIpv6CidrBlock?: Value<string>;
    egressOnlyInternetGatewayId?: Value<string>;
    gatewayId?: Value<string>;
    instanceId?: Value<string>;
    natGatewayId?: Value<string>;
    networkInterfaceId?: Value<string>;
    transitGatewayId?: Value<string>;
    vpcPeeringConnectionId?: Value<string>;
}