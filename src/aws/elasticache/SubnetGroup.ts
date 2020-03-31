import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type SubnetGroupAttributes = {  }
export function subnetGroup(subnetGroupProps: SubnetGroup): SubnetGroup & { attributes: SubnetGroupAttributes } { return ({ ...subnetGroupProps, _logicalType: 'AWS::ElastiCache::SubnetGroup', attributes: {  } }) }

export interface SubnetGroup extends KloudResource {
    description: Value<string>;
    subnetIds: Value<Value<string>[]>;
    cacheSubnetGroupName?: Value<string>;
}