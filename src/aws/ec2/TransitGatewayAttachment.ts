import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function transitGatewayAttachment(transitGatewayAttachmentProps: TransitGatewayAttachment): TransitGatewayAttachment { return ({ ...transitGatewayAttachmentProps, _logicalType: '' }) }
  
export interface TransitGatewayAttachment extends KloudResource {
  transitGatewayId: Value<string>
  vpcId: Value<string>
  subnetIds: Value<Value<string>[]>
  tags?: Tag[]
}