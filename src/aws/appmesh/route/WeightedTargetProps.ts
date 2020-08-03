import { Value } from '../../../kloudformation/Value';

export interface WeightedTargetProps {
  virtualNode: Value<string>
  weight: Value<number>
}