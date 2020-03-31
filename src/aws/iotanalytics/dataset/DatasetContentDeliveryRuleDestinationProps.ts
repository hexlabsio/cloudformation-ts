import { IotEventsDestinationConfigurationProps } from './IotEventsDestinationConfigurationProps';
import { S3DestinationConfigurationProps } from './S3DestinationConfigurationProps';

export function datasetContentDeliveryRuleDestinationProps(datasetContentDeliveryRuleDestinationPropsProps: DatasetContentDeliveryRuleDestinationProps): DatasetContentDeliveryRuleDestinationProps { return (datasetContentDeliveryRuleDestinationPropsProps) }

export interface DatasetContentDeliveryRuleDestinationProps {
    iotEventsDestinationConfiguration?: IotEventsDestinationConfigurationProps;
    s3DestinationConfiguration?: S3DestinationConfigurationProps;
}