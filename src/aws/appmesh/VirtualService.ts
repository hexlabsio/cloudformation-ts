import { Value } from '../../kloudformation/Value';
import { VirtualServiceSpecProps } from './virtualservice/VirtualServiceSpecProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function virtualService(virtualServiceProps: VirtualService & { logicalName?: string }): VirtualService { return ({ ...virtualServiceProps, _logicalType: 'AWS::AppMesh::VirtualService' }) as unknown as VirtualService }

export interface VirtualService extends KloudResource {
    meshName: Value<string>;
    virtualServiceName: Value<string>;
    spec: VirtualServiceSpecProps;
    meshOwner?: Value<string>;
    tags?: Tag[];
}