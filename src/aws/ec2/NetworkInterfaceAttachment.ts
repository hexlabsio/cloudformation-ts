import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type NetworkInterfaceAttachmentAttributes = {  }
export function networkInterfaceAttachment(networkInterfaceAttachmentProps: NetworkInterfaceAttachment): NetworkInterfaceAttachment & { attributes: NetworkInterfaceAttachmentAttributes } { return ({ ...networkInterfaceAttachmentProps, _logicalType: 'AWS::EC2::NetworkInterfaceAttachment', attributes: {  } }) }

export interface NetworkInterfaceAttachment extends KloudResource {
    deviceIndex: Value<string>;
    instanceId: Value<string>;
    networkInterfaceId: Value<string>;
    deleteOnTermination?: Value<boolean>;
}