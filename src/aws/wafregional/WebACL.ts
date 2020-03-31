import { Value } from '../../kloudformation/Value';
import { ActionProps } from './webacl/ActionProps';
import { RuleProps } from './webacl/RuleProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type WebACLAttributes = {  }
export function webACL(webACLProps: WebACL): WebACL & { attributes: WebACLAttributes } { return ({ ...webACLProps, _logicalType: 'AWS::WAFRegional::WebACL', attributes: {  } }) }

export interface WebACL extends KloudResource {
    metricName: Value<string>;
    defaultAction: ActionProps;
    name: Value<string>;
    rules?: RuleProps[];
}