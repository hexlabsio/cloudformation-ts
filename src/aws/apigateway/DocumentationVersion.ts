import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function documentationVersion(documentationVersionProps: DocumentationVersion): DocumentationVersion { return ({ ...documentationVersionProps, _logicalType: '' }) }
  
export interface DocumentationVersion extends KloudResource {
  description?: Value<string>
  documentationVersion: Value<string>
  restApiId: Value<string>
}