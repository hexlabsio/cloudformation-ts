import { Value } from '../../kloudformation/Value';
import { ActionProps } from './webacl/ActionProps';
import { RuleProps } from './webacl/RuleProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function webACL(webACLProps: WebACL & { logicalName?: string }): WebACL { return ({ ...webACLProps, _logicalType: 'AWS::WAFRegional::WebACL' }) as unknown as WebACL }

export interface WebACL extends KloudResource {
    metricName: Value<string>;
    defaultAction: ActionProps;
    name: Value<string>;
    rules?: RuleProps[];
}