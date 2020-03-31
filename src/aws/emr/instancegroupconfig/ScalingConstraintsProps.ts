import { Value } from '../../../kloudformation/Value';

export function scalingConstraintsProps(scalingConstraintsPropsProps: ScalingConstraintsProps): ScalingConstraintsProps { return (scalingConstraintsPropsProps) }

export interface ScalingConstraintsProps {
    maxCapacity: Value<number>;
    minCapacity: Value<number>;
}