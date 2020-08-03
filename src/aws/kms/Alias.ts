import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function alias(aliasProps: Alias): Alias { return ({ ...aliasProps, _logicalType: '' }) }
  
export interface Alias extends KloudResource {
  aliasName: Value<string>
  targetKeyId: Value<string>
}