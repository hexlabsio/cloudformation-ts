import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function dBSubnetGroup(dBSubnetGroupProps: DBSubnetGroup & { logicalName?: string }): DBSubnetGroup { return ({ ...dBSubnetGroupProps, _logicalType: 'AWS::RDS::DBSubnetGroup' }) as unknown as DBSubnetGroup }

export interface DBSubnetGroup extends KloudResource {
    dBSubnetGroupDescription: Value<string>;
    subnetIds: Value<Value<string>[]>;
    dBSubnetGroupName?: Value<string>;
    tags?: Tag[];
}