import { Value } from '../../kloudformation/Value';
import { ClusterSettingProps } from './cluster/ClusterSettingProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type ClusterAttributes = { Arn: Attribute<string> }
export function cluster(clusterProps: Cluster): Cluster & { attributes: ClusterAttributes } { return ({ ...clusterProps, _logicalType: 'AWS::ECS::Cluster', attributes: { Arn: 'Arn' } }) }

export interface Cluster extends KloudResource {
    clusterName?: Value<string>;
    clusterSettings?: ClusterSettingProps[];
    tags?: Tag[];
}