import { Value } from '../../kloudformation/Value';
import { MatcherProps } from './targetgroup/MatcherProps';
import { Tag } from '../Tag';
import { TargetGroupAttributeProps } from './targetgroup/TargetGroupAttributeProps';
import { TargetDescriptionProps } from './targetgroup/TargetDescriptionProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type TargetGroupAttributes = { LoadBalancerArns: Attribute<Value<string>[]>; TargetGroupFullName: Attribute<string>; TargetGroupName: Attribute<string> }
export function targetGroup(targetGroupProps: TargetGroup): TargetGroup & { attributes: TargetGroupAttributes } { return ({ ...targetGroupProps, _logicalType: 'AWS::ElasticLoadBalancingV2::TargetGroup', attributes: { LoadBalancerArns: 'LoadBalancerArns', TargetGroupFullName: 'TargetGroupFullName', TargetGroupName: 'TargetGroupName' } }) }

export interface TargetGroup extends KloudResource {
    healthCheckEnabled?: Value<boolean>;
    healthCheckIntervalSeconds?: Value<number>;
    healthCheckPath?: Value<string>;
    healthCheckPort?: Value<string>;
    healthCheckProtocol?: Value<string>;
    healthCheckTimeoutSeconds?: Value<number>;
    healthyThresholdCount?: Value<number>;
    matcher?: MatcherProps;
    name?: Value<string>;
    port?: Value<number>;
    protocol?: Value<string>;
    tags?: Tag[];
    targetGroupAttributes?: TargetGroupAttributeProps[];
    targetType?: Value<string>;
    targets?: TargetDescriptionProps[];
    unhealthyThresholdCount?: Value<number>;
    vpcId?: Value<string>;
}