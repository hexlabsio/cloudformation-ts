import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function clusterSecurityGroup(clusterSecurityGroupProps: ClusterSecurityGroup & { logicalName?: string }): ClusterSecurityGroup { return ({ ...clusterSecurityGroupProps, _logicalType: 'AWS::Redshift::ClusterSecurityGroup' }) as unknown as ClusterSecurityGroup }

export interface ClusterSecurityGroup extends KloudResource {
    description: Value<string>;
    tags?: Tag[];
}