import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function receiptRuleSet(receiptRuleSetProps: ReceiptRuleSet & { logicalName?: string }): ReceiptRuleSet { return ({ ...receiptRuleSetProps, _logicalType: 'AWS::SES::ReceiptRuleSet' }) as unknown as ReceiptRuleSet }

export interface ReceiptRuleSet extends KloudResource {
    ruleSetName?: Value<string>;
}