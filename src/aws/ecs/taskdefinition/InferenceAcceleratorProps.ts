import { Value } from '../../../kloudformation/Value';

export interface InferenceAcceleratorProps {
  deviceName?: Value<string>
  deviceType?: Value<string>
}