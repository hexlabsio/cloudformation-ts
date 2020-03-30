import { Value } from '../../kloudformation/Value';
import { ClusterSettingProps } from './cluster/ClusterSettingProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function cluster(clusterProps: Cluster & { logicalName?: string }): Cluster { return ({ ...clusterProps, _logicalType: 'AWS::ECS::Cluster' }) as unknown as Cluster }

export interface Cluster extends KloudResource {
    clusterName?: Value<string>;
    clusterSettings?: ClusterSettingProps[];
    tags?: Tag[];
}