import { Value } from '../../kloudformation/Value';
import { TagsProps } from './application/TagsProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function application(applicationProps: Application): Application { return ({ ...applicationProps, _logicalType: '' }) }
  
export interface Application extends KloudResource {
  description?: Value<string>
  tags?: TagsProps[]
  name: Value<string>
}