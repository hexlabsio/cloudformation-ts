import { Value } from '../../../kloudformation/Value';

export function computeCapacityProps(computeCapacityPropsProps: ComputeCapacityProps): ComputeCapacityProps { return (computeCapacityPropsProps) as unknown as ComputeCapacityProps }

export interface ComputeCapacityProps {
    desiredInstances: Value<number>;
}