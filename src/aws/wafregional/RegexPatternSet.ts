import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type RegexPatternSetAttributes = {  }
export function regexPatternSet(regexPatternSetProps: RegexPatternSet): RegexPatternSet & { attributes: RegexPatternSetAttributes } { return ({ ...regexPatternSetProps, _logicalType: 'AWS::WAFRegional::RegexPatternSet', attributes: {  } }) }

export interface RegexPatternSet extends KloudResource {
    regexPatternStrings: Value<Value<string>[]>;
    name: Value<string>;
}