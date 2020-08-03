import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function stack(stackProps: Stack): Stack { return ({ ...stackProps, _logicalType: '' }) }
  
export interface Stack extends KloudResource {
  notificationARNs?: Value<Value<string>[]>
  parameters?: Value<Value<string>[]>
  tags?: Tag[]
  templateURL: Value<string>
  timeoutInMinutes?: Value<number>
}