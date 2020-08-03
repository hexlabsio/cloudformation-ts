import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function document(documentProps: Document): Document { return ({ ...documentProps, _logicalType: '' }) }
  
export interface Document extends KloudResource {
  content: Value<any>
  documentType?: Value<string>
  name?: Value<string>
  tags?: Tag[]
}