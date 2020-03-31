import { DatasetContentDeliveryRuleDestinationProps } from './DatasetContentDeliveryRuleDestinationProps';
import { Value } from '../../../kloudformation/Value';

export function datasetContentDeliveryRuleProps(datasetContentDeliveryRulePropsProps: DatasetContentDeliveryRuleProps): DatasetContentDeliveryRuleProps { return (datasetContentDeliveryRulePropsProps) }

export interface DatasetContentDeliveryRuleProps {
    destination: DatasetContentDeliveryRuleDestinationProps;
    entryName?: Value<string>;
}