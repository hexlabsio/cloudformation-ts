import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type PlacementGroupAttributes = {  }
export function placementGroup(placementGroupProps: PlacementGroup): PlacementGroup & { attributes: PlacementGroupAttributes } { return ({ ...placementGroupProps, _logicalType: 'AWS::EC2::PlacementGroup', attributes: {  } }) }

export interface PlacementGroup extends KloudResource {
    strategy?: Value<string>;
}