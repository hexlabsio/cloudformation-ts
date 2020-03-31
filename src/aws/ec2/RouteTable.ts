import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type RouteTableAttributes = {  }
export function routeTable(routeTableProps: RouteTable): RouteTable & { attributes: RouteTableAttributes } { return ({ ...routeTableProps, _logicalType: 'AWS::EC2::RouteTable', attributes: {  } }) }

export interface RouteTable extends KloudResource {
    vpcId: Value<string>;
    tags?: Tag[];
}