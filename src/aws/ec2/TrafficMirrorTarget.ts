import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type TrafficMirrorTargetAttributes = {  }
export function trafficMirrorTarget(trafficMirrorTargetProps: TrafficMirrorTarget): TrafficMirrorTarget & { attributes: TrafficMirrorTargetAttributes } { return ({ ...trafficMirrorTargetProps, _logicalType: 'AWS::EC2::TrafficMirrorTarget', attributes: {  } }) }

export interface TrafficMirrorTarget extends KloudResource {
    networkLoadBalancerArn?: Value<string>;
    description?: Value<string>;
    networkInterfaceId?: Value<string>;
    tags?: Tag[];
}