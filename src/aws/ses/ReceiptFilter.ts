import { FilterProps } from './receiptfilter/FilterProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function receiptFilter(receiptFilterProps: ReceiptFilter & { logicalName?: string }): ReceiptFilter { return ({ ...receiptFilterProps, _logicalType: 'AWS::SES::ReceiptFilter' }) as unknown as ReceiptFilter }

export interface ReceiptFilter extends KloudResource {
    filter: FilterProps;
}