import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function networkInterfaceAttachment(networkInterfaceAttachmentProps: NetworkInterfaceAttachment): NetworkInterfaceAttachment { return ({ ...networkInterfaceAttachmentProps, _logicalType: '' }) }
  
export interface NetworkInterfaceAttachment extends KloudResource {
  deleteOnTermination?: Value<boolean>
  deviceIndex: Value<string>
  instanceId: Value<string>
  networkInterfaceId: Value<string>
}