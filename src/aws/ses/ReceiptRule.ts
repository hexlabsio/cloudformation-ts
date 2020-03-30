import { RuleProps } from './receiptrule/RuleProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function receiptRule(receiptRuleProps: ReceiptRule & { logicalName?: string }): ReceiptRule { return ({ ...receiptRuleProps, _logicalType: 'AWS::SES::ReceiptRule' }) as unknown as ReceiptRule }

export interface ReceiptRule extends KloudResource {
    rule: RuleProps;
    ruleSetName: Value<string>;
    after?: Value<string>;
}