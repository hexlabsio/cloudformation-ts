import { RuleProps } from './receiptrule/RuleProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ReceiptRuleAttributes = {  }
export function receiptRule(receiptRuleProps: ReceiptRule): ReceiptRule & { attributes: ReceiptRuleAttributes } { return ({ ...receiptRuleProps, _logicalType: 'AWS::SES::ReceiptRule', attributes: {  } }) }

export interface ReceiptRule extends KloudResource {
    rule: RuleProps;
    ruleSetName: Value<string>;
    after?: Value<string>;
}