import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function customResource(customResourceProps: CustomResource): CustomResource { return ({ ...customResourceProps, _logicalType: '' }) }
  
export interface CustomResource extends KloudResource {
  serviceToken: Value<string>
}