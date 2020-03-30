import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function networkInterfaceAttachment(networkInterfaceAttachmentProps: NetworkInterfaceAttachment & { logicalName?: string }): NetworkInterfaceAttachment { return ({ ...networkInterfaceAttachmentProps, _logicalType: 'AWS::EC2::NetworkInterfaceAttachment' }) as unknown as NetworkInterfaceAttachment }

export interface NetworkInterfaceAttachment extends KloudResource {
    deviceIndex: Value<string>;
    instanceId: Value<string>;
    networkInterfaceId: Value<string>;
    deleteOnTermination?: Value<boolean>;
}