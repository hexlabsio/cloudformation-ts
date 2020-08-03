import { Value } from '../../../kloudformation/Value';

export interface EbsBlockDeviceProps {
  deleteOnTermination?: Value<boolean>
  iops?: Value<number>
  snapshotId?: Value<string>
  volumeSize?: Value<number>
  volumeType?: Value<string>
}