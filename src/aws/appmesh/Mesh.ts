import { Value } from '../../kloudformation/Value';
import { MeshSpecProps } from './mesh/MeshSpecProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type MeshAttributes = { Uid: Attribute<string>;MeshName: Attribute<string>;MeshOwner: Attribute<string>;ResourceOwner: Attribute<string>;Arn: Attribute<string> }
export function mesh(meshProps: Mesh): Mesh & {attributes: MeshAttributes} { return ({ ...meshProps, _logicalType: 'AWS::AppMesh::Mesh', attributes: { Uid: 'Uid',MeshName: 'MeshName',MeshOwner: 'MeshOwner',ResourceOwner: 'ResourceOwner',Arn: 'Arn' } }) }
   
export interface Mesh extends KloudResource {
  meshName: Value<string>
  spec?: MeshSpecProps
  tags?: Tag[]
}