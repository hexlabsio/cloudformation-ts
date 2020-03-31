import { Value } from '../../../kloudformation/Value';

export function trafficMirrorPortRangeProps(trafficMirrorPortRangePropsProps: TrafficMirrorPortRangeProps): TrafficMirrorPortRangeProps { return (trafficMirrorPortRangePropsProps) }

export interface TrafficMirrorPortRangeProps {
    fromPort: Value<number>;
    toPort: Value<number>;
}