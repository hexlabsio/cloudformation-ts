import { Value } from '../../kloudformation/Value';
import { VirtualGatewaySpecProps } from './virtualGateway/VirtualGatewaySpecProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type VirtualGatewayAttributes = { Uid: Attribute<string>;VirtualGatewayName: Attribute<string>;MeshName: Attribute<string>;MeshOwner: Attribute<string>;ResourceOwner: Attribute<string>;Arn: Attribute<string> }
export function virtualGateway(virtualGatewayProps: VirtualGateway): VirtualGateway & {attributes: VirtualGatewayAttributes} { return ({ ...virtualGatewayProps, _logicalType: 'AWS::AppMesh::VirtualGateway', attributes: { Uid: 'Uid',VirtualGatewayName: 'VirtualGatewayName',MeshName: 'MeshName',MeshOwner: 'MeshOwner',ResourceOwner: 'ResourceOwner',Arn: 'Arn' } }) }
   
export interface VirtualGateway extends KloudResource {
  virtualGatewayName: Value<string>
  meshName: Value<string>
  meshOwner?: Value<string>
  spec: VirtualGatewaySpecProps
  tags?: Tag[]
}