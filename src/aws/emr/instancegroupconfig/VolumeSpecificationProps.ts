import { Value } from '../../../kloudformation/Value';

export interface VolumeSpecificationProps {
  iops?: Value<number>
  sizeInGB: Value<number>
  volumeType: Value<string>
}