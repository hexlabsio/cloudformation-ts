import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type DBSubnetGroupAttributes = {  }
export function dBSubnetGroup(dBSubnetGroupProps: DBSubnetGroup): DBSubnetGroup & { attributes: DBSubnetGroupAttributes } { return ({ ...dBSubnetGroupProps, _logicalType: 'AWS::RDS::DBSubnetGroup', attributes: {  } }) }

export interface DBSubnetGroup extends KloudResource {
    dBSubnetGroupDescription: Value<string>;
    subnetIds: Value<Value<string>[]>;
    dBSubnetGroupName?: Value<string>;
    tags?: Tag[];
}