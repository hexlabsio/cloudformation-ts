import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function resource(resourceProps: Resource): Resource { return ({ ...resourceProps, _logicalType: '' }) }
  
export interface Resource extends KloudResource {
  parentId: Value<string>
  pathPart: Value<string>
  restApiId: Value<string>
}