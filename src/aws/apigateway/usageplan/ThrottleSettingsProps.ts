import { Value } from '../../../kloudformation/Value';

export interface ThrottleSettingsProps {
  burstLimit?: Value<number>
  rateLimit?: Value<number>
}