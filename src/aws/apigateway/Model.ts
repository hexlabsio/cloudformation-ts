import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function model(modelProps: Model): Model { return ({ ...modelProps, _logicalType: '' }) }
  
export interface Model extends KloudResource {
  contentType?: Value<string>
  description?: Value<string>
  name?: Value<string>
  restApiId: Value<string>
  schema?: Value<any>
}