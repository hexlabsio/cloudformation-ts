import { Value } from '../../kloudformation/Value';
import { MeshSpecProps } from './mesh/MeshSpecProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function mesh(meshProps: Mesh & { logicalName?: string }): Mesh { return ({ ...meshProps, _logicalType: 'AWS::AppMesh::Mesh' }) as unknown as Mesh }

export interface Mesh extends KloudResource {
    meshName: Value<string>;
    spec?: MeshSpecProps;
    tags?: Tag[];
}