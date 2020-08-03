import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function parameterGroup(parameterGroupProps: ParameterGroup): ParameterGroup { return ({ ...parameterGroupProps, _logicalType: '' }) }
  
export interface ParameterGroup extends KloudResource {
  cacheParameterGroupFamily: Value<string>
  description: Value<string>
  properties?: Value<Value<string>[]>
}