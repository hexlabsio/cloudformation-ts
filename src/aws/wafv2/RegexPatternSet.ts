import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function regexPatternSet(regexPatternSetProps: RegexPatternSet & { logicalName?: string }): RegexPatternSet { return ({ ...regexPatternSetProps, _logicalType: 'AWS::WAFv2::RegexPatternSet' }) as unknown as RegexPatternSet }

export interface RegexPatternSet extends KloudResource {
    regularExpressionList: Value<Value<string>[]>;
    scope: Value<string>;
    description?: Value<string>;
    name?: Value<string>;
    tags?: Tag[];
}