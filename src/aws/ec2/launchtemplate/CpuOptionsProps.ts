import { Value } from '../../../kloudformation/Value';

export function cpuOptionsProps(cpuOptionsPropsProps: CpuOptionsProps): CpuOptionsProps { return (cpuOptionsPropsProps) }

export interface CpuOptionsProps {
    threadsPerCore?: Value<number>;
    coreCount?: Value<number>;
}