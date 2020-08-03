import { Value } from '../../kloudformation/Value';
import { MonitorsProps } from './environment/MonitorsProps';
import { TagsProps } from './environment/TagsProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function environment(environmentProps: Environment): Environment { return ({ ...environmentProps, _logicalType: '' }) }
  
export interface Environment extends KloudResource {
  description?: Value<string>
  monitors?: MonitorsProps[]
  applicationId: Value<string>
  tags?: TagsProps[]
  name: Value<string>
}