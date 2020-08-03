import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function apiMapping(apiMappingProps: ApiMapping): ApiMapping { return ({ ...apiMappingProps, _logicalType: '' }) }
  
export interface ApiMapping extends KloudResource {
  domainName: Value<string>
  stage: Value<string>
  apiMappingKey?: Value<string>
  apiId: Value<string>
}