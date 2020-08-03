import { Value } from '../../../kloudformation/Value';

export interface GenerateSecretStringProps {
  excludeUppercase?: Value<boolean>
  requireEachIncludedType?: Value<boolean>
  includeSpace?: Value<boolean>
  excludeCharacters?: Value<string>
  generateStringKey?: Value<string>
  passwordLength?: Value<number>
  excludePunctuation?: Value<boolean>
  excludeLowercase?: Value<boolean>
  secretStringTemplate?: Value<string>
  excludeNumbers?: Value<boolean>
}