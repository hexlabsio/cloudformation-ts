import { Value } from '../../kloudformation/Value';
import { ElasticsearchDestinationConfigurationProps } from './deliverystream/ElasticsearchDestinationConfigurationProps';
import { ExtendedS3DestinationConfigurationProps } from './deliverystream/ExtendedS3DestinationConfigurationProps';
import { KinesisStreamSourceConfigurationProps } from './deliverystream/KinesisStreamSourceConfigurationProps';
import { RedshiftDestinationConfigurationProps } from './deliverystream/RedshiftDestinationConfigurationProps';
import { S3DestinationConfigurationProps } from './deliverystream/S3DestinationConfigurationProps';
import { SplunkDestinationConfigurationProps } from './deliverystream/SplunkDestinationConfigurationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function deliveryStream(deliveryStreamProps: DeliveryStream & { logicalName?: string }): DeliveryStream { return ({ ...deliveryStreamProps, _logicalType: 'AWS::KinesisFirehose::DeliveryStream' }) as unknown as DeliveryStream }

export interface DeliveryStream extends KloudResource {
    deliveryStreamName?: Value<string>;
    deliveryStreamType?: Value<string>;
    elasticsearchDestinationConfiguration?: ElasticsearchDestinationConfigurationProps;
    extendedS3DestinationConfiguration?: ExtendedS3DestinationConfigurationProps;
    kinesisStreamSourceConfiguration?: KinesisStreamSourceConfigurationProps;
    redshiftDestinationConfiguration?: RedshiftDestinationConfigurationProps;
    s3DestinationConfiguration?: S3DestinationConfigurationProps;
    splunkDestinationConfiguration?: SplunkDestinationConfigurationProps;
}