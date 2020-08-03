import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function trafficMirrorTarget(trafficMirrorTargetProps: TrafficMirrorTarget): TrafficMirrorTarget { return ({ ...trafficMirrorTargetProps, _logicalType: '' }) }
  
export interface TrafficMirrorTarget extends KloudResource {
  networkLoadBalancerArn?: Value<string>
  description?: Value<string>
  networkInterfaceId?: Value<string>
  tags?: Tag[]
}