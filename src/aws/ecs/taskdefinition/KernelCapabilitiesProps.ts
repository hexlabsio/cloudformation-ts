import { Value } from '../../../kloudformation/Value';

export function kernelCapabilitiesProps(kernelCapabilitiesPropsProps: KernelCapabilitiesProps): KernelCapabilitiesProps { return (kernelCapabilitiesPropsProps) }

export interface KernelCapabilitiesProps {
    add?: Value<Value<string>[]>;
    drop?: Value<Value<string>[]>;
}