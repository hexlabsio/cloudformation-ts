import { Value } from '../../../kloudformation/Value';

export interface SpotOptionsProps {
  spotInstanceType?: Value<string>
  instanceInterruptionBehavior?: Value<string>
  maxPrice?: Value<string>
  blockDurationMinutes?: Value<number>
  validUntil?: Value<string>
}