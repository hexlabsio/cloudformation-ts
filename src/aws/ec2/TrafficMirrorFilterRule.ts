import { Value } from '../../kloudformation/Value';
import { TrafficMirrorPortRangeProps } from './trafficmirrorfilterrule/TrafficMirrorPortRangeProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function trafficMirrorFilterRule(trafficMirrorFilterRuleProps: TrafficMirrorFilterRule & { logicalName?: string }): TrafficMirrorFilterRule { return ({ ...trafficMirrorFilterRuleProps, _logicalType: 'AWS::EC2::TrafficMirrorFilterRule' }) as unknown as TrafficMirrorFilterRule }

export interface TrafficMirrorFilterRule extends KloudResource {
    ruleAction: Value<string>;
    sourceCidrBlock: Value<string>;
    ruleNumber: Value<number>;
    destinationCidrBlock: Value<string>;
    trafficMirrorFilterId: Value<string>;
    trafficDirection: Value<string>;
    destinationPortRange?: TrafficMirrorPortRangeProps;
    description?: Value<string>;
    sourcePortRange?: TrafficMirrorPortRangeProps;
    protocol?: Value<number>;
}