import { Value } from '../../../kloudformation/Value';

export function trafficMirrorPortRangeProps(trafficMirrorPortRangePropsProps: TrafficMirrorPortRangeProps): TrafficMirrorPortRangeProps { return (trafficMirrorPortRangePropsProps) as unknown as TrafficMirrorPortRangeProps }

export interface TrafficMirrorPortRangeProps {
    fromPort: Value<number>;
    toPort: Value<number>;
}