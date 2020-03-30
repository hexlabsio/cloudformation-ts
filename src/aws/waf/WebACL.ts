import { WafActionProps } from './webacl/WafActionProps';
import { Value } from '../../kloudformation/Value';
import { ActivatedRuleProps } from './webacl/ActivatedRuleProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function webACL(webACLProps: WebACL & { logicalName?: string }): WebACL { return ({ ...webACLProps, _logicalType: 'AWS::WAF::WebACL' }) as unknown as WebACL }

export interface WebACL extends KloudResource {
    defaultAction: WafActionProps;
    metricName: Value<string>;
    name: Value<string>;
    rules?: ActivatedRuleProps[];
}