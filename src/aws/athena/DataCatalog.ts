import { Value } from '../../kloudformation/Value';
import { TagsProps } from './dataCatalog/TagsProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function dataCatalog(dataCatalogProps: DataCatalog): DataCatalog { return ({ ...dataCatalogProps, _logicalType: '' }) }
  
export interface DataCatalog extends KloudResource {
  name: Value<string>
  description?: Value<string>
  parameters?: Value<Value<string>[]>
  tags?: TagsProps
  type: Value<string>
}