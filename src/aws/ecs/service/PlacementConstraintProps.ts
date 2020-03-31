import { Value } from '../../../kloudformation/Value';

export function placementConstraintProps(placementConstraintPropsProps: PlacementConstraintProps): PlacementConstraintProps { return (placementConstraintPropsProps) }

export interface PlacementConstraintProps {
    type: Value<string>;
    expression?: Value<string>;
}