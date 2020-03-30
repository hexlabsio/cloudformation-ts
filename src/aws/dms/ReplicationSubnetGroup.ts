import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function replicationSubnetGroup(replicationSubnetGroupProps: ReplicationSubnetGroup & { logicalName?: string }): ReplicationSubnetGroup { return ({ ...replicationSubnetGroupProps, _logicalType: 'AWS::DMS::ReplicationSubnetGroup' }) as unknown as ReplicationSubnetGroup }

export interface ReplicationSubnetGroup extends KloudResource {
    replicationSubnetGroupDescription: Value<string>;
    subnetIds: Value<Value<string>[]>;
    replicationSubnetGroupIdentifier?: Value<string>;
    tags?: Tag[];
}