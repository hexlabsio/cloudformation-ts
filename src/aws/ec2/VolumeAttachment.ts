import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function volumeAttachment(volumeAttachmentProps: VolumeAttachment & { logicalName?: string }): VolumeAttachment { return ({ ...volumeAttachmentProps, _logicalType: 'AWS::EC2::VolumeAttachment' }) as unknown as VolumeAttachment }

export interface VolumeAttachment extends KloudResource {
    device: Value<string>;
    instanceId: Value<string>;
    volumeId: Value<string>;
}