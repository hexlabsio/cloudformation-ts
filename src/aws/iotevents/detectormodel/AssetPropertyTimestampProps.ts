import { Value } from '../../../kloudformation/Value';

export interface AssetPropertyTimestampProps {
  timeInSeconds?: Value<string>
  offsetInNanos?: Value<string>
}