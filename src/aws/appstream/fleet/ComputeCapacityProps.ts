import { Value } from '../../../kloudformation/Value';

export function computeCapacityProps(computeCapacityPropsProps: ComputeCapacityProps): ComputeCapacityProps { return (computeCapacityPropsProps) }

export interface ComputeCapacityProps {
    desiredInstances: Value<number>;
}