import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function routeTable(routeTableProps: RouteTable & { logicalName?: string }): RouteTable { return ({ ...routeTableProps, _logicalType: 'AWS::EC2::RouteTable' }) as unknown as RouteTable }

export interface RouteTable extends KloudResource {
    vpcId: Value<string>;
    tags?: Tag[];
}