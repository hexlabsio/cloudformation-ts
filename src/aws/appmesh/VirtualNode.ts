import { Value } from '../../kloudformation/Value';
import { VirtualNodeSpecProps } from './virtualnode/VirtualNodeSpecProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function virtualNode(virtualNodeProps: VirtualNode & { logicalName?: string }): VirtualNode { return ({ ...virtualNodeProps, _logicalType: 'AWS::AppMesh::VirtualNode' }) as unknown as VirtualNode }

export interface VirtualNode extends KloudResource {
    meshName: Value<string>;
    spec: VirtualNodeSpecProps;
    virtualNodeName: Value<string>;
    meshOwner?: Value<string>;
    tags?: Tag[];
}