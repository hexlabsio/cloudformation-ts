import { Value } from '../../kloudformation/Value';
import { ConfigSnapshotDeliveryPropertiesProps } from './deliverychannel/ConfigSnapshotDeliveryPropertiesProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function deliveryChannel(deliveryChannelProps: DeliveryChannel & { logicalName?: string }): DeliveryChannel { return ({ ...deliveryChannelProps, _logicalType: 'AWS::Config::DeliveryChannel' }) as unknown as DeliveryChannel }

export interface DeliveryChannel extends KloudResource {
    s3BucketName: Value<string>;
    configSnapshotDeliveryProperties?: ConfigSnapshotDeliveryPropertiesProps;
    name?: Value<string>;
    s3KeyPrefix?: Value<string>;
    snsTopicARN?: Value<string>;
}