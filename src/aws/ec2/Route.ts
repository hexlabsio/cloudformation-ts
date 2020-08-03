import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function route(routeProps: Route): Route { return ({ ...routeProps, _logicalType: '' }) }
  
export interface Route extends KloudResource {
  destinationCidrBlock?: Value<string>
  destinationIpv6CidrBlock?: Value<string>
  egressOnlyInternetGatewayId?: Value<string>
  gatewayId?: Value<string>
  instanceId?: Value<string>
  natGatewayId?: Value<string>
  networkInterfaceId?: Value<string>
  routeTableId: Value<string>
  transitGatewayId?: Value<string>
  vpcPeeringConnectionId?: Value<string>
}