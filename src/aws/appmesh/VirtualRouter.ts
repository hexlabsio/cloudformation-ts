import { Value } from '../../kloudformation/Value';
import { VirtualRouterSpecProps } from './virtualrouter/VirtualRouterSpecProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function virtualRouter(virtualRouterProps: VirtualRouter & { logicalName?: string }): VirtualRouter { return ({ ...virtualRouterProps, _logicalType: 'AWS::AppMesh::VirtualRouter' }) as unknown as VirtualRouter }

export interface VirtualRouter extends KloudResource {
    meshName: Value<string>;
    virtualRouterName: Value<string>;
    spec: VirtualRouterSpecProps;
    meshOwner?: Value<string>;
    tags?: Tag[];
}