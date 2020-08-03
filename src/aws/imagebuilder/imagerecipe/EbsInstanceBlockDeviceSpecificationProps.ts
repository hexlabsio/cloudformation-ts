import { Value } from '../../../kloudformation/Value';

export interface EbsInstanceBlockDeviceSpecificationProps {
  encrypted?: Value<boolean>
  deleteOnTermination?: Value<boolean>
  iops?: Value<number>
  kmsKeyId?: Value<string>
  snapshotId?: Value<string>
  volumeSize?: Value<number>
  volumeType?: Value<string>
}