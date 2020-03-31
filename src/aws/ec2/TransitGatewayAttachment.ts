import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type TransitGatewayAttachmentAttributes = {  }
export function transitGatewayAttachment(transitGatewayAttachmentProps: TransitGatewayAttachment): TransitGatewayAttachment & { attributes: TransitGatewayAttachmentAttributes } { return ({ ...transitGatewayAttachmentProps, _logicalType: 'AWS::EC2::TransitGatewayAttachment', attributes: {  } }) }

export interface TransitGatewayAttachment extends KloudResource {
    transitGatewayId: Value<string>;
    vpcId: Value<string>;
    subnetIds: Value<Value<string>[]>;
    tags?: Tag[];
}