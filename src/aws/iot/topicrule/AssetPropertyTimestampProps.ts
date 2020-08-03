import { Value } from '../../../kloudformation/Value';

export interface AssetPropertyTimestampProps {
  offsetInNanos?: Value<string>
  timeInSeconds: Value<string>
}