import { ScalingConfigProps } from './nodegroup/ScalingConfigProps';
import { Value } from '../../kloudformation/Value';
import { RemoteAccessProps } from './nodegroup/RemoteAccessProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type NodegroupAttributes = { NodegroupName: Attribute<string>;ClusterName: Attribute<string>;Arn: Attribute<string> }
export function nodegroup(nodegroupProps: Nodegroup): Nodegroup & {attributes: NodegroupAttributes} { return ({ ...nodegroupProps, _logicalType: 'AWS::EKS::Nodegroup', attributes: { NodegroupName: 'NodegroupName',ClusterName: 'ClusterName',Arn: 'Arn' } }) }
   
export interface Nodegroup extends KloudResource {
  scalingConfig?: ScalingConfigProps
  labels?: Value<any>
  releaseVersion?: Value<string>
  nodegroupName?: Value<string>
  subnets: Value<Value<string>[]>
  nodeRole: Value<string>
  amiType?: Value<string>
  forceUpdateEnabled?: Value<boolean>
  version?: Value<string>
  remoteAccess?: RemoteAccessProps
  diskSize?: Value<number>
  clusterName: Value<string>
  instanceTypes?: Value<Value<string>[]>
  tags?: Value<any>
}