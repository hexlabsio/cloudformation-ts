import { Value } from '../../../kloudformation/Value';

export function cpuOptionsProps(cpuOptionsPropsProps: CpuOptionsProps): CpuOptionsProps { return (cpuOptionsPropsProps) as unknown as CpuOptionsProps }

export interface CpuOptionsProps {
    coreCount?: Value<number>;
    threadsPerCore?: Value<number>;
}