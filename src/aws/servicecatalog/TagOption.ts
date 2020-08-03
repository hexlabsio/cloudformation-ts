import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function tagOption(tagOptionProps: TagOption): TagOption { return ({ ...tagOptionProps, _logicalType: '' }) }
  
export interface TagOption extends KloudResource {
  active?: Value<boolean>
  value: Value<string>
  key: Value<string>
}