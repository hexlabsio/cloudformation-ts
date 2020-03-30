import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function transitGatewayAttachment(transitGatewayAttachmentProps: TransitGatewayAttachment & { logicalName?: string }): TransitGatewayAttachment { return ({ ...transitGatewayAttachmentProps, _logicalType: 'AWS::EC2::TransitGatewayAttachment' }) as unknown as TransitGatewayAttachment }

export interface TransitGatewayAttachment extends KloudResource {
    transitGatewayId: Value<string>;
    vpcId: Value<string>;
    subnetIds: Value<Value<string>[]>;
    tags?: Tag[];
}