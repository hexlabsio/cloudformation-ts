import { Value } from '../../kloudformation/Value';
import { VirtualServiceSpecProps } from './virtualService/VirtualServiceSpecProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type VirtualServiceAttributes = { Uid: Attribute<string>;MeshName: Attribute<string>;MeshOwner: Attribute<string>;ResourceOwner: Attribute<string>;VirtualServiceName: Attribute<string>;Arn: Attribute<string> }
export function virtualService(virtualServiceProps: VirtualService): VirtualService & {attributes: VirtualServiceAttributes} { return ({ ...virtualServiceProps, _logicalType: 'AWS::AppMesh::VirtualService', attributes: { Uid: 'Uid',MeshName: 'MeshName',MeshOwner: 'MeshOwner',ResourceOwner: 'ResourceOwner',VirtualServiceName: 'VirtualServiceName',Arn: 'Arn' } }) }
   
export interface VirtualService extends KloudResource {
  meshName: Value<string>
  meshOwner?: Value<string>
  virtualServiceName: Value<string>
  spec: VirtualServiceSpecProps
  tags?: Tag[]
}