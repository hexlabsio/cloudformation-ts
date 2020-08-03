import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type RegexPatternSetAttributes = { Arn: Attribute<string>;Id: Attribute<string> }
export function regexPatternSet(regexPatternSetProps: RegexPatternSet): RegexPatternSet & {attributes: RegexPatternSetAttributes} { return ({ ...regexPatternSetProps, _logicalType: 'AWS::WAFv2::RegexPatternSet', attributes: { Arn: 'Arn',Id: 'Id' } }) }
   
export interface RegexPatternSet extends KloudResource {
  description?: Value<string>
  name?: Value<string>
  regularExpressionList: Value<Value<string>[]>
  scope: Value<string>
  tags?: Tag[]
}