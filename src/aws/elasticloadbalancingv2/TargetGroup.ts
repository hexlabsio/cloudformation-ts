import { Value } from '../../kloudformation/Value';
import { MatcherProps } from './targetGroup/MatcherProps';
import { Tag } from '../Tag';
import { TargetGroupAttributeProps } from './targetGroup/TargetGroupAttributeProps';
import { TargetDescriptionProps } from './targetGroup/TargetDescriptionProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type TargetGroupAttributes = { LoadBalancerArns: Attribute<string[]>;TargetGroupFullName: Attribute<string>;TargetGroupName: Attribute<string> }
export function targetGroup(targetGroupProps: TargetGroup): TargetGroup & {attributes: TargetGroupAttributes} { return ({ ...targetGroupProps, _logicalType: 'AWS::ElasticLoadBalancingV2::TargetGroup', attributes: { LoadBalancerArns: 'LoadBalancerArns',TargetGroupFullName: 'TargetGroupFullName',TargetGroupName: 'TargetGroupName' } }) }
   
export interface TargetGroup extends KloudResource {
  healthCheckEnabled?: Value<boolean>
  healthCheckIntervalSeconds?: Value<number>
  healthCheckPath?: Value<string>
  healthCheckPort?: Value<string>
  healthCheckProtocol?: Value<string>
  healthCheckTimeoutSeconds?: Value<number>
  healthyThresholdCount?: Value<number>
  matcher?: MatcherProps
  name?: Value<string>
  port?: Value<number>
  protocol?: Value<string>
  tags?: Tag[]
  targetGroupAttributes?: TargetGroupAttributeProps[]
  targetType?: Value<string>
  targets?: TargetDescriptionProps[]
  unhealthyThresholdCount?: Value<number>
  vpcId?: Value<string>
}