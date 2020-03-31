import { Value } from '../../kloudformation/Value';
import { RouteSpecProps } from './route/RouteSpecProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type RouteAttributes = { Uid: Attribute<string>; MeshName: Attribute<string>; VirtualRouterName: Attribute<string>; MeshOwner: Attribute<string>; ResourceOwner: Attribute<string>; RouteName: Attribute<string>; Arn: Attribute<string> }
export function route(routeProps: Route): Route & { attributes: RouteAttributes } { return ({ ...routeProps, _logicalType: 'AWS::AppMesh::Route', attributes: { Uid: 'Uid', MeshName: 'MeshName', VirtualRouterName: 'VirtualRouterName', MeshOwner: 'MeshOwner', ResourceOwner: 'ResourceOwner', RouteName: 'RouteName', Arn: 'Arn' } }) }

export interface Route extends KloudResource {
    meshName: Value<string>;
    virtualRouterName: Value<string>;
    routeName: Value<string>;
    spec: RouteSpecProps;
    meshOwner?: Value<string>;
    tags?: Tag[];
}