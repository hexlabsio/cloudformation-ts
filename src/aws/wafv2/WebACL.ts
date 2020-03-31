import { DefaultActionProps } from './webacl/DefaultActionProps';
import { Value } from '../../kloudformation/Value';
import { VisibilityConfigProps } from './webacl/VisibilityConfigProps';
import { RuleProps } from '../wafregional/webacl/RuleProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type WebACLAttributes = { Arn: Attribute<string>; Capacity: Attribute<number>; Id: Attribute<string> }
export function webACL(webACLProps: WebACL): WebACL & { attributes: WebACLAttributes } { return ({ ...webACLProps, _logicalType: 'AWS::WAFv2::WebACL', attributes: { Arn: 'Arn', Capacity: 'Capacity', Id: 'Id' } }) }

export interface WebACL extends KloudResource {
    defaultAction: DefaultActionProps;
    scope: Value<string>;
    visibilityConfig: VisibilityConfigProps;
    description?: Value<string>;
    name?: Value<string>;
    rules?: RuleProps[];
    tags?: Tag[];
}