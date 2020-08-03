import { Value } from '../../../kloudformation/Value';

export interface PortRangeProps {
  fromPort: Value<number>
  toPort: Value<number>
}