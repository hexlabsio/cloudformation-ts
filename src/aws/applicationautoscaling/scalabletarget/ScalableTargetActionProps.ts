import { Value } from '../../../kloudformation/Value';

export interface ScalableTargetActionProps {
  maxCapacity?: Value<number>
  minCapacity?: Value<number>
}