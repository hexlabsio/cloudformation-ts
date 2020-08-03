import { Value } from '../../../kloudformation/Value';

export interface OpenXJsonSerDeProps {
  caseInsensitive?: Value<boolean>
  columnToJsonKeyMappings?: Value<Value<string>[]>
  convertDotsInJsonKeysToUnderscores?: Value<boolean>
}