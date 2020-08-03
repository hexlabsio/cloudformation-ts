import { Value } from '../../../kloudformation/Value';

export interface ScalingConstraintsProps {
  maxCapacity: Value<number>
  minCapacity: Value<number>
}