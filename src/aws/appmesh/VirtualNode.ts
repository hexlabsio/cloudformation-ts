import { Value } from '../../kloudformation/Value';
import { VirtualNodeSpecProps } from './virtualNode/VirtualNodeSpecProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type VirtualNodeAttributes = { Uid: Attribute<string>;MeshName: Attribute<string>;MeshOwner: Attribute<string>;ResourceOwner: Attribute<string>;Arn: Attribute<string>;VirtualNodeName: Attribute<string> }
export function virtualNode(virtualNodeProps: VirtualNode): VirtualNode & {attributes: VirtualNodeAttributes} { return ({ ...virtualNodeProps, _logicalType: 'AWS::AppMesh::VirtualNode', attributes: { Uid: 'Uid',MeshName: 'MeshName',MeshOwner: 'MeshOwner',ResourceOwner: 'ResourceOwner',Arn: 'Arn',VirtualNodeName: 'VirtualNodeName' } }) }
   
export interface VirtualNode extends KloudResource {
  meshName: Value<string>
  meshOwner?: Value<string>
  spec: VirtualNodeSpecProps
  virtualNodeName: Value<string>
  tags?: Tag[]
}