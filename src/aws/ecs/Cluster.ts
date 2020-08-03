import { Tag } from '../Tag';
import { Value } from '../../kloudformation/Value';
import { ClusterSettingsProps } from './cluster/ClusterSettingsProps';
import { CapacityProviderStrategyItemProps } from './cluster/CapacityProviderStrategyItemProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ClusterAttributes = { Arn: Attribute<string> }
export function cluster(clusterProps: Cluster): Cluster & {attributes: ClusterAttributes} { return ({ ...clusterProps, _logicalType: 'AWS::ECS::Cluster', attributes: { Arn: 'Arn' } }) }
   
export interface Cluster extends KloudResource {
  tags?: Tag[]
  clusterName?: Value<string>
  clusterSettings?: ClusterSettingsProps[]
  capacityProviders?: Value<Value<string>[]>
  defaultCapacityProviderStrategy?: CapacityProviderStrategyItemProps[]
}