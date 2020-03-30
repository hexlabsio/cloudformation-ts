import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function regexPatternSet(regexPatternSetProps: RegexPatternSet & { logicalName?: string }): RegexPatternSet { return ({ ...regexPatternSetProps, _logicalType: 'AWS::WAFRegional::RegexPatternSet' }) as unknown as RegexPatternSet }

export interface RegexPatternSet extends KloudResource {
    regexPatternStrings: Value<Value<string>[]>;
    name: Value<string>;
}