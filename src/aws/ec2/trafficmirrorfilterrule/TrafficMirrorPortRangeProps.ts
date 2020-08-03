import { Value } from '../../../kloudformation/Value';

export interface TrafficMirrorPortRangeProps {
  fromPort: Value<number>
  toPort: Value<number>
}