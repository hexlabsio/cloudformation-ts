import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ClusterSubnetGroupAttributes = {  }
export function clusterSubnetGroup(clusterSubnetGroupProps: ClusterSubnetGroup): ClusterSubnetGroup & { attributes: ClusterSubnetGroupAttributes } { return ({ ...clusterSubnetGroupProps, _logicalType: 'AWS::Redshift::ClusterSubnetGroup', attributes: {  } }) }

export interface ClusterSubnetGroup extends KloudResource {
    description: Value<string>;
    subnetIds: Value<Value<string>[]>;
    tags?: Tag[];
}