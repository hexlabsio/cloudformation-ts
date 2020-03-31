import { Value } from '../../kloudformation/Value';
import { ConfigSnapshotDeliveryPropertiesProps } from './deliverychannel/ConfigSnapshotDeliveryPropertiesProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type DeliveryChannelAttributes = {  }
export function deliveryChannel(deliveryChannelProps: DeliveryChannel): DeliveryChannel & { attributes: DeliveryChannelAttributes } { return ({ ...deliveryChannelProps, _logicalType: 'AWS::Config::DeliveryChannel', attributes: {  } }) }

export interface DeliveryChannel extends KloudResource {
    s3BucketName: Value<string>;
    configSnapshotDeliveryProperties?: ConfigSnapshotDeliveryPropertiesProps;
    name?: Value<string>;
    s3KeyPrefix?: Value<string>;
    snsTopicARN?: Value<string>;
}