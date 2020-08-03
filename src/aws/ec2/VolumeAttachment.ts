import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function volumeAttachment(volumeAttachmentProps: VolumeAttachment): VolumeAttachment { return ({ ...volumeAttachmentProps, _logicalType: '' }) }
  
export interface VolumeAttachment extends KloudResource {
  device: Value<string>
  instanceId: Value<string>
  volumeId: Value<string>
}