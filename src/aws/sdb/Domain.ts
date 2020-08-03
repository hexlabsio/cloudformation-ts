import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function domain(domainProps: Domain): Domain { return ({ ...domainProps, _logicalType: '' }) }
  
export interface Domain extends KloudResource {
  description?: Value<string>
}