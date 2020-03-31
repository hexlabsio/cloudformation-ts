import { Value } from '../../../kloudformation/Value';

export function cpuOptionsProps(cpuOptionsPropsProps: CpuOptionsProps): CpuOptionsProps { return (cpuOptionsPropsProps) }

export interface CpuOptionsProps {
    coreCount?: Value<number>;
    threadsPerCore?: Value<number>;
}