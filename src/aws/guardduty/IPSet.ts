import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function iPSet(iPSetProps: IPSet): IPSet { return ({ ...iPSetProps, _logicalType: '' }) }
  
export interface IPSet extends KloudResource {
  format: Value<string>
  activate: Value<boolean>
  detectorId: Value<string>
  name?: Value<string>
  location: Value<string>
}