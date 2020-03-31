import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type RegexPatternSetAttributes = { Arn: Attribute<string>; Id: Attribute<string> }
export function regexPatternSet(regexPatternSetProps: RegexPatternSet): RegexPatternSet & { attributes: RegexPatternSetAttributes } { return ({ ...regexPatternSetProps, _logicalType: 'AWS::WAFv2::RegexPatternSet', attributes: { Arn: 'Arn', Id: 'Id' } }) }

export interface RegexPatternSet extends KloudResource {
    regularExpressionList: Value<Value<string>[]>;
    scope: Value<string>;
    description?: Value<string>;
    name?: Value<string>;
    tags?: Tag[];
}