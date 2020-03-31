import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type VolumeAttributes = {  }
export function volume(volumeProps: Volume): Volume & { attributes: VolumeAttributes } { return ({ ...volumeProps, _logicalType: 'AWS::EC2::Volume', attributes: {  } }) }

export interface Volume extends KloudResource {
    availabilityZone: Value<string>;
    autoEnableIO?: Value<boolean>;
    encrypted?: Value<boolean>;
    iops?: Value<number>;
    kmsKeyId?: Value<string>;
    multiAttachEnabled?: Value<boolean>;
    size?: Value<number>;
    snapshotId?: Value<string>;
    tags?: Tag[];
    volumeType?: Value<string>;
}