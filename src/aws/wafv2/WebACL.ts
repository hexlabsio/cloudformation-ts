import { DefaultActionProps } from './webacl/DefaultActionProps';
import { Value } from '../../kloudformation/Value';
import { VisibilityConfigProps } from './webacl/VisibilityConfigProps';
import { RuleProps } from '../wafregional/webacl/RuleProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function webACL(webACLProps: WebACL & { logicalName?: string }): WebACL { return ({ ...webACLProps, _logicalType: 'AWS::WAFv2::WebACL' }) as unknown as WebACL }

export interface WebACL extends KloudResource {
    defaultAction: DefaultActionProps;
    scope: Value<string>;
    visibilityConfig: VisibilityConfigProps;
    description?: Value<string>;
    name?: Value<string>;
    rules?: RuleProps[];
    tags?: Tag[];
}