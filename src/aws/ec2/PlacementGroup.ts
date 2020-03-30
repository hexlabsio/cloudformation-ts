import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function placementGroup(placementGroupProps: PlacementGroup & { logicalName?: string }): PlacementGroup { return ({ ...placementGroupProps, _logicalType: 'AWS::EC2::PlacementGroup' }) as unknown as PlacementGroup }

export interface PlacementGroup extends KloudResource {
    strategy?: Value<string>;
}