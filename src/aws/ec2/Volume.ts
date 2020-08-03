import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function volume(volumeProps: Volume): Volume { return ({ ...volumeProps, _logicalType: '' }) }
  
export interface Volume extends KloudResource {
  autoEnableIO?: Value<boolean>
  availabilityZone: Value<string>
  encrypted?: Value<boolean>
  iops?: Value<number>
  kmsKeyId?: Value<string>
  multiAttachEnabled?: Value<boolean>
  outpostArn?: Value<string>
  size?: Value<number>
  snapshotId?: Value<string>
  tags?: Tag[]
  volumeType?: Value<string>
}