import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function model(modelProps: Model): Model { return ({ ...modelProps, _logicalType: '' }) }
  
export interface Model extends KloudResource {
  description?: Value<string>
  contentType?: Value<string>
  schema: Value<any>
  apiId: Value<string>
  name: Value<string>
}