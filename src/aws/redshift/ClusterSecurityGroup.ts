import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function clusterSecurityGroup(clusterSecurityGroupProps: ClusterSecurityGroup): ClusterSecurityGroup { return ({ ...clusterSecurityGroupProps, _logicalType: '' }) }
  
export interface ClusterSecurityGroup extends KloudResource {
  description: Value<string>
  tags?: Tag[]
}