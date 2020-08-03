import { Value } from '../../kloudformation/Value';
import { GatewayRouteSpecProps } from './gatewayRoute/GatewayRouteSpecProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type GatewayRouteAttributes = { Uid: Attribute<string>;MeshName: Attribute<string>;VirtualGatewayName: Attribute<string>;MeshOwner: Attribute<string>;ResourceOwner: Attribute<string>;GatewayRouteName: Attribute<string>;Arn: Attribute<string> }
export function gatewayRoute(gatewayRouteProps: GatewayRoute): GatewayRoute & {attributes: GatewayRouteAttributes} { return ({ ...gatewayRouteProps, _logicalType: 'AWS::AppMesh::GatewayRoute', attributes: { Uid: 'Uid',MeshName: 'MeshName',VirtualGatewayName: 'VirtualGatewayName',MeshOwner: 'MeshOwner',ResourceOwner: 'ResourceOwner',GatewayRouteName: 'GatewayRouteName',Arn: 'Arn' } }) }
   
export interface GatewayRoute extends KloudResource {
  meshName: Value<string>
  virtualGatewayName: Value<string>
  meshOwner?: Value<string>
  gatewayRouteName: Value<string>
  spec: GatewayRouteSpecProps
  tags?: Tag[]
}