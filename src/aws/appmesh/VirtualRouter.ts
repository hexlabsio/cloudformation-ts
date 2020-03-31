import { Value } from '../../kloudformation/Value';
import { VirtualRouterSpecProps } from './virtualrouter/VirtualRouterSpecProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type VirtualRouterAttributes = { Uid: Attribute<string>; MeshName: Attribute<string>; VirtualRouterName: Attribute<string>; MeshOwner: Attribute<string>; ResourceOwner: Attribute<string>; Arn: Attribute<string> }
export function virtualRouter(virtualRouterProps: VirtualRouter): VirtualRouter & { attributes: VirtualRouterAttributes } { return ({ ...virtualRouterProps, _logicalType: 'AWS::AppMesh::VirtualRouter', attributes: { Uid: 'Uid', MeshName: 'MeshName', VirtualRouterName: 'VirtualRouterName', MeshOwner: 'MeshOwner', ResourceOwner: 'ResourceOwner', Arn: 'Arn' } }) }

export interface VirtualRouter extends KloudResource {
    meshName: Value<string>;
    virtualRouterName: Value<string>;
    spec: VirtualRouterSpecProps;
    meshOwner?: Value<string>;
    tags?: Tag[];
}