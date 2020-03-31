import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ReceiptRuleSetAttributes = {  }
export function receiptRuleSet(receiptRuleSetProps: ReceiptRuleSet): ReceiptRuleSet & { attributes: ReceiptRuleSetAttributes } { return ({ ...receiptRuleSetProps, _logicalType: 'AWS::SES::ReceiptRuleSet', attributes: {  } }) }

export interface ReceiptRuleSet extends KloudResource {
    ruleSetName?: Value<string>;
}