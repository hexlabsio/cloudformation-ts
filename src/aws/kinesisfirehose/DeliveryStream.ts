import { Value } from '../../kloudformation/Value';
import { ElasticsearchDestinationConfigurationProps } from './deliveryStream/ElasticsearchDestinationConfigurationProps';
import { ExtendedS3DestinationConfigurationProps } from './deliveryStream/ExtendedS3DestinationConfigurationProps';
import { KinesisStreamSourceConfigurationProps } from './deliveryStream/KinesisStreamSourceConfigurationProps';
import { RedshiftDestinationConfigurationProps } from './deliveryStream/RedshiftDestinationConfigurationProps';
import { S3DestinationConfigurationProps } from './deliveryStream/S3DestinationConfigurationProps';
import { SplunkDestinationConfigurationProps } from './deliveryStream/SplunkDestinationConfigurationProps';
import { HttpEndpointDestinationConfigurationProps } from './deliveryStream/HttpEndpointDestinationConfigurationProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type DeliveryStreamAttributes = { Arn: Attribute<string> }
export function deliveryStream(deliveryStreamProps: DeliveryStream): DeliveryStream & {attributes: DeliveryStreamAttributes} { return ({ ...deliveryStreamProps, _logicalType: 'AWS::KinesisFirehose::DeliveryStream', attributes: { Arn: 'Arn' } }) }
   
export interface DeliveryStream extends KloudResource {
  deliveryStreamName?: Value<string>
  deliveryStreamType?: Value<string>
  elasticsearchDestinationConfiguration?: ElasticsearchDestinationConfigurationProps
  extendedS3DestinationConfiguration?: ExtendedS3DestinationConfigurationProps
  kinesisStreamSourceConfiguration?: KinesisStreamSourceConfigurationProps
  redshiftDestinationConfiguration?: RedshiftDestinationConfigurationProps
  s3DestinationConfiguration?: S3DestinationConfigurationProps
  splunkDestinationConfiguration?: SplunkDestinationConfigurationProps
  httpEndpointDestinationConfiguration?: HttpEndpointDestinationConfigurationProps
}