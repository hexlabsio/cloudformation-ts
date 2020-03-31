import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ReplicationSubnetGroupAttributes = {  }
export function replicationSubnetGroup(replicationSubnetGroupProps: ReplicationSubnetGroup): ReplicationSubnetGroup & { attributes: ReplicationSubnetGroupAttributes } { return ({ ...replicationSubnetGroupProps, _logicalType: 'AWS::DMS::ReplicationSubnetGroup', attributes: {  } }) }

export interface ReplicationSubnetGroup extends KloudResource {
    replicationSubnetGroupDescription: Value<string>;
    subnetIds: Value<Value<string>[]>;
    replicationSubnetGroupIdentifier?: Value<string>;
    tags?: Tag[];
}