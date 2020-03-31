import { Value } from '../../kloudformation/Value';
import { ScalingConfigProps } from './nodegroup/ScalingConfigProps';
import { RemoteAccessProps } from './nodegroup/RemoteAccessProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type NodegroupAttributes = { NodegroupName: Attribute<string>; ClusterName: Attribute<string>; Arn: Attribute<string> }
export function nodegroup(nodegroupProps: Nodegroup): Nodegroup & { attributes: NodegroupAttributes } { return ({ ...nodegroupProps, _logicalType: 'AWS::EKS::Nodegroup', attributes: { NodegroupName: 'NodegroupName', ClusterName: 'ClusterName', Arn: 'Arn' } }) }

export interface Nodegroup extends KloudResource {
    subnets: Value<Value<string>[]>;
    nodeRole: Value<string>;
    clusterName: Value<string>;
    scalingConfig?: ScalingConfigProps;
    labels?: Value<any>;
    releaseVersion?: Value<string>;
    nodegroupName?: Value<string>;
    amiType?: Value<string>;
    forceUpdateEnabled?: Value<boolean>;
    version?: Value<string>;
    remoteAccess?: RemoteAccessProps;
    diskSize?: Value<number>;
    instanceTypes?: Value<Value<string>[]>;
    tags?: Value<any>;
}