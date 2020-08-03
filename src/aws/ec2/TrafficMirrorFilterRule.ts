import { TrafficMirrorPortRangeProps } from './trafficMirrorFilterRule/TrafficMirrorPortRangeProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function trafficMirrorFilterRule(trafficMirrorFilterRuleProps: TrafficMirrorFilterRule): TrafficMirrorFilterRule { return ({ ...trafficMirrorFilterRuleProps, _logicalType: '' }) }
  
export interface TrafficMirrorFilterRule extends KloudResource {
  destinationPortRange?: TrafficMirrorPortRangeProps
  description?: Value<string>
  sourcePortRange?: TrafficMirrorPortRangeProps
  ruleAction: Value<string>
  sourceCidrBlock: Value<string>
  ruleNumber: Value<number>
  destinationCidrBlock: Value<string>
  trafficMirrorFilterId: Value<string>
  trafficDirection: Value<string>
  protocol?: Value<number>
}