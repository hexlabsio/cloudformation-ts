import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function basePathMapping(basePathMappingProps: BasePathMapping): BasePathMapping { return ({ ...basePathMappingProps, _logicalType: '' }) }
  
export interface BasePathMapping extends KloudResource {
  basePath?: Value<string>
  domainName: Value<string>
  restApiId?: Value<string>
  stage?: Value<string>
}