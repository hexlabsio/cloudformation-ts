import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function vPCGatewayAttachment(vPCGatewayAttachmentProps: VPCGatewayAttachment & { logicalName?: string }): VPCGatewayAttachment { return ({ ...vPCGatewayAttachmentProps, _logicalType: 'AWS::EC2::VPCGatewayAttachment' }) as unknown as VPCGatewayAttachment }

export interface VPCGatewayAttachment extends KloudResource {
    vpcId: Value<string>;
    internetGatewayId?: Value<string>;
    vpnGatewayId?: Value<string>;
}