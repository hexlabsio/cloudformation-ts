import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function clusterSubnetGroup(clusterSubnetGroupProps: ClusterSubnetGroup & { logicalName?: string }): ClusterSubnetGroup { return ({ ...clusterSubnetGroupProps, _logicalType: 'AWS::Redshift::ClusterSubnetGroup' }) as unknown as ClusterSubnetGroup }

export interface ClusterSubnetGroup extends KloudResource {
    description: Value<string>;
    subnetIds: Value<Value<string>[]>;
    tags?: Tag[];
}