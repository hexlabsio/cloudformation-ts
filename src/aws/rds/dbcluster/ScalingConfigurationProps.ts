import { Value } from '../../../kloudformation/Value';

export interface ScalingConfigurationProps {
  autoPause?: Value<boolean>
  maxCapacity?: Value<number>
  minCapacity?: Value<number>
  secondsUntilAutoPause?: Value<number>
}