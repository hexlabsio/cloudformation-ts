import { Value } from '../../../kloudformation/Value';

export function scalingConstraintsProps(scalingConstraintsPropsProps: ScalingConstraintsProps): ScalingConstraintsProps { return (scalingConstraintsPropsProps) as unknown as ScalingConstraintsProps }

export interface ScalingConstraintsProps {
    maxCapacity: Value<number>;
    minCapacity: Value<number>;
}