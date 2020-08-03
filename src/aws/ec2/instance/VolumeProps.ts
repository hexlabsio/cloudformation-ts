import { Value } from '../../../kloudformation/Value';

export interface VolumeProps {
  device: Value<string>
  volumeId: Value<string>
}