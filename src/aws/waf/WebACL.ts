import { WafActionProps } from './webacl/WafActionProps';
import { Value } from '../../kloudformation/Value';
import { ActivatedRuleProps } from './webacl/ActivatedRuleProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type WebACLAttributes = {  }
export function webACL(webACLProps: WebACL): WebACL & { attributes: WebACLAttributes } { return ({ ...webACLProps, _logicalType: 'AWS::WAF::WebACL', attributes: {  } }) }

export interface WebACL extends KloudResource {
    defaultAction: WafActionProps;
    metricName: Value<string>;
    name: Value<string>;
    rules?: ActivatedRuleProps[];
}