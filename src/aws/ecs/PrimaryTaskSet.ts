import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function primaryTaskSet(primaryTaskSetProps: PrimaryTaskSet): PrimaryTaskSet { return ({ ...primaryTaskSetProps, _logicalType: '' }) }
  
export interface PrimaryTaskSet extends KloudResource {
  cluster: Value<string>
  taskSetId: Value<string>
  service: Value<string>
}