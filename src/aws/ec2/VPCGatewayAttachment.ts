import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function vPCGatewayAttachment(vPCGatewayAttachmentProps: VPCGatewayAttachment): VPCGatewayAttachment { return ({ ...vPCGatewayAttachmentProps, _logicalType: '' }) }
  
export interface VPCGatewayAttachment extends KloudResource {
  internetGatewayId?: Value<string>
  vpcId: Value<string>
  vpnGatewayId?: Value<string>
}