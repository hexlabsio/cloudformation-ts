import { Value } from '../../../kloudformation/Value';

export function kernelCapabilitiesProps(kernelCapabilitiesPropsProps: KernelCapabilitiesProps): KernelCapabilitiesProps { return (kernelCapabilitiesPropsProps) as unknown as KernelCapabilitiesProps }

export interface KernelCapabilitiesProps {
    add?: Value<Value<string>[]>;
    drop?: Value<Value<string>[]>;
}