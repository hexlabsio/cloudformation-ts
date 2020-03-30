import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function trafficMirrorTarget(trafficMirrorTargetProps: TrafficMirrorTarget & { logicalName?: string }): TrafficMirrorTarget { return ({ ...trafficMirrorTargetProps, _logicalType: 'AWS::EC2::TrafficMirrorTarget' }) as unknown as TrafficMirrorTarget }

export interface TrafficMirrorTarget extends KloudResource {
    networkLoadBalancerArn?: Value<string>;
    description?: Value<string>;
    networkInterfaceId?: Value<string>;
    tags?: Tag[];
}