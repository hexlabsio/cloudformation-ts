import { Value } from '../../../kloudformation/Value';

export interface EbsProps {
  deleteOnTermination?: Value<boolean>
  encrypted?: Value<boolean>
  iops?: Value<number>
  kmsKeyId?: Value<string>
  snapshotId?: Value<string>
  volumeSize?: Value<number>
  volumeType?: Value<string>
}