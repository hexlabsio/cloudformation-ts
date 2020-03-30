import { Value } from '../../kloudformation/Value';
import { RouteSpecProps } from './route/RouteSpecProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function route(routeProps: Route & { logicalName?: string }): Route { return ({ ...routeProps, _logicalType: 'AWS::AppMesh::Route' }) as unknown as Route }

export interface Route extends KloudResource {
    meshName: Value<string>;
    virtualRouterName: Value<string>;
    routeName: Value<string>;
    spec: RouteSpecProps;
    meshOwner?: Value<string>;
    tags?: Tag[];
}