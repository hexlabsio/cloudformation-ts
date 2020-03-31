import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type VPCGatewayAttachmentAttributes = {  }
export function vPCGatewayAttachment(vPCGatewayAttachmentProps: VPCGatewayAttachment): VPCGatewayAttachment & { attributes: VPCGatewayAttachmentAttributes } { return ({ ...vPCGatewayAttachmentProps, _logicalType: 'AWS::EC2::VPCGatewayAttachment', attributes: {  } }) }

export interface VPCGatewayAttachment extends KloudResource {
    vpcId: Value<string>;
    internetGatewayId?: Value<string>;
    vpnGatewayId?: Value<string>;
}