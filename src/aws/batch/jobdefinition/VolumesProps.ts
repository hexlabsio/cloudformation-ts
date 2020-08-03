import { VolumesHostProps } from './VolumesHostProps';
import { Value } from '../../../kloudformation/Value';

export interface VolumesProps {
  host?: VolumesHostProps
  name?: Value<string>
}