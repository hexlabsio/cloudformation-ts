import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ClusterSecurityGroupAttributes = {  }
export function clusterSecurityGroup(clusterSecurityGroupProps: ClusterSecurityGroup): ClusterSecurityGroup & { attributes: ClusterSecurityGroupAttributes } { return ({ ...clusterSecurityGroupProps, _logicalType: 'AWS::Redshift::ClusterSecurityGroup', attributes: {  } }) }

export interface ClusterSecurityGroup extends KloudResource {
    description: Value<string>;
    tags?: Tag[];
}