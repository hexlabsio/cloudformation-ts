import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function route(routeProps: Route & { logicalName?: string }): Route { return ({ ...routeProps, _logicalType: 'AWS::EC2::Route' }) as unknown as Route }

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