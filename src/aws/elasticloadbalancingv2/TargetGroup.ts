import { Value } from '../../kloudformation/Value';
import { MatcherProps } from './targetgroup/MatcherProps';
import { Tag } from '../Tag';
import { TargetGroupAttributeProps } from './targetgroup/TargetGroupAttributeProps';
import { TargetDescriptionProps } from './targetgroup/TargetDescriptionProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function targetGroup(targetGroupProps: TargetGroup & { logicalName?: string }): TargetGroup { return ({ ...targetGroupProps, _logicalType: 'AWS::ElasticLoadBalancingV2::TargetGroup' }) as unknown as TargetGroup }

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