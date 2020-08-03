import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function regexPatternSet(regexPatternSetProps: RegexPatternSet): RegexPatternSet { return ({ ...regexPatternSetProps, _logicalType: '' }) }
  
export interface RegexPatternSet extends KloudResource {
  regexPatternStrings: Value<Value<string>[]>
  name: Value<string>
}