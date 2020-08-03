import { LocationProps } from './documentationPart/LocationProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function documentationPart(documentationPartProps: DocumentationPart): DocumentationPart { return ({ ...documentationPartProps, _logicalType: '' }) }
  
export interface DocumentationPart extends KloudResource {
  location: LocationProps
  properties: Value<string>
  restApiId: Value<string>
}