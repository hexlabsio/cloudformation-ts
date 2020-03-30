import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function volume(volumeProps: Volume & { logicalName?: string }): Volume { return ({ ...volumeProps, _logicalType: 'AWS::EC2::Volume' }) as unknown as Volume }

export interface Volume extends KloudResource {
    availabilityZone: Value<string>;
    autoEnableIO?: Value<boolean>;
    encrypted?: Value<boolean>;
    iops?: Value<number>;
    kmsKeyId?: Value<string>;
    size?: Value<number>;
    snapshotId?: Value<string>;
    tags?: Tag[];
    volumeType?: Value<string>;
}