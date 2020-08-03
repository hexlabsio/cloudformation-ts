import { IotEventsDestinationConfigurationProps } from './IotEventsDestinationConfigurationProps';
import { S3DestinationConfigurationProps } from './S3DestinationConfigurationProps';

export interface DatasetContentDeliveryRuleDestinationProps {
  iotEventsDestinationConfiguration?: IotEventsDestinationConfigurationProps
  s3DestinationConfiguration?: S3DestinationConfigurationProps
}