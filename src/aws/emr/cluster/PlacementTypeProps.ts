import { Value } from '../../../kloudformation/Value';

export function placementTypeProps(placementTypePropsProps: PlacementTypeProps): PlacementTypeProps { return (placementTypePropsProps) }

export interface PlacementTypeProps {
    availabilityZone: Value<string>;
}