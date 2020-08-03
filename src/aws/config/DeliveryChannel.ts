import { ConfigSnapshotDeliveryPropertiesProps } from './deliveryChannel/ConfigSnapshotDeliveryPropertiesProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function deliveryChannel(deliveryChannelProps: DeliveryChannel): DeliveryChannel { return ({ ...deliveryChannelProps, _logicalType: '' }) }
  
export interface DeliveryChannel extends KloudResource {
  configSnapshotDeliveryProperties?: ConfigSnapshotDeliveryPropertiesProps
  name?: Value<string>
  s3BucketName: Value<string>
  s3KeyPrefix?: Value<string>
  snsTopicARN?: Value<string>
}