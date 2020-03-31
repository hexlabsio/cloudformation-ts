import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type VolumeAttachmentAttributes = {  }
export function volumeAttachment(volumeAttachmentProps: VolumeAttachment): VolumeAttachment & { attributes: VolumeAttachmentAttributes } { return ({ ...volumeAttachmentProps, _logicalType: 'AWS::EC2::VolumeAttachment', attributes: {  } }) }

export interface VolumeAttachment extends KloudResource {
    device: Value<string>;
    instanceId: Value<string>;
    volumeId: Value<string>;
}