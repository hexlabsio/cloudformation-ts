import { Value } from '../../../kloudformation/Value';

export function computeEnvironmentOrderProps(computeEnvironmentOrderPropsProps: ComputeEnvironmentOrderProps): ComputeEnvironmentOrderProps { return (computeEnvironmentOrderPropsProps) }

export interface ComputeEnvironmentOrderProps {
    computeEnvironment: Value<string>;
    order: Value<number>;
}