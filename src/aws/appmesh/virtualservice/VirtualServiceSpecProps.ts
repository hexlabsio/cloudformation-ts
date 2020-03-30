import { VirtualServiceProviderProps } from './VirtualServiceProviderProps';

export function virtualServiceSpecProps(virtualServiceSpecPropsProps: VirtualServiceSpecProps): VirtualServiceSpecProps { return (virtualServiceSpecPropsProps) as unknown as VirtualServiceSpecProps }

export interface VirtualServiceSpecProps {
    provider?: VirtualServiceProviderProps;
}