import { Value } from '../../../kloudformation/Value';

export interface SpotOptionsRequestProps {
  singleAvailabilityZone?: Value<boolean>
  allocationStrategy?: Value<string>
  singleInstanceType?: Value<boolean>
  minTargetCapacity?: Value<number>
  maxTotalPrice?: Value<string>
  instanceInterruptionBehavior?: Value<string>
  instancePoolsToUseCount?: Value<number>
}