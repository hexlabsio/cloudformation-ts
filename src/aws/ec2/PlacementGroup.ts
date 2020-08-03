import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function placementGroup(placementGroupProps: PlacementGroup): PlacementGroup { return ({ ...placementGroupProps, _logicalType: '' }) }
  
export interface PlacementGroup extends KloudResource {
  strategy?: Value<string>
}