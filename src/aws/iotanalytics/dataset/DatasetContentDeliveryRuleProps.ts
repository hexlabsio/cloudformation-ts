import { DatasetContentDeliveryRuleDestinationProps } from './DatasetContentDeliveryRuleDestinationProps';
import { Value } from '../../../kloudformation/Value';

export interface DatasetContentDeliveryRuleProps {
  destination: DatasetContentDeliveryRuleDestinationProps
  entryName?: Value<string>
}