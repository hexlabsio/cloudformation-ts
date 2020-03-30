import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function subnetGroup(subnetGroupProps: SubnetGroup & { logicalName?: string }): SubnetGroup { return ({ ...subnetGroupProps, _logicalType: 'AWS::ElastiCache::SubnetGroup' }) as unknown as SubnetGroup }

export interface SubnetGroup extends KloudResource {
    description: Value<string>;
    subnetIds: Value<Value<string>[]>;
    cacheSubnetGroupName?: Value<string>;
}