import { Value } from '../../../kloudformation/Value';

export function placementTypeProps(placementTypePropsProps: PlacementTypeProps): PlacementTypeProps { return (placementTypePropsProps) as unknown as PlacementTypeProps }

export interface PlacementTypeProps {
    availabilityZone: Value<string>;
}