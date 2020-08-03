import { Value } from '../../../kloudformation/Value';

export interface BlockDeviceProps {
  deleteOnTermination?: Value<boolean>
  encrypted?: Value<boolean>
  iops?: Value<number>
  snapshotId?: Value<string>
  volumeSize?: Value<number>
  volumeType?: Value<string>
}