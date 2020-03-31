import { FilterProps } from './receiptfilter/FilterProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ReceiptFilterAttributes = {  }
export function receiptFilter(receiptFilterProps: ReceiptFilter): ReceiptFilter & { attributes: ReceiptFilterAttributes } { return ({ ...receiptFilterProps, _logicalType: 'AWS::SES::ReceiptFilter', attributes: {  } }) }

export interface ReceiptFilter extends KloudResource {
    filter: FilterProps;
}