import { Value } from '../../../kloudformation/Value';

export interface ManagedScalingProps {
  minimumScalingStepSize?: Value<number>
  maximumScalingStepSize?: Value<number>
  status?: Value<string>
  targetCapacity?: Value<number>
}