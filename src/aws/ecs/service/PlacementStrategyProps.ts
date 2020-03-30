import { Value } from '../../../kloudformation/Value';

export function placementStrategyProps(placementStrategyPropsProps: PlacementStrategyProps): PlacementStrategyProps { return (placementStrategyPropsProps) as unknown as PlacementStrategyProps }

export interface PlacementStrategyProps {
    type: Value<string>;
    field?: Value<string>;
}