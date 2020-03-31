import { VirtualServiceProviderProps } from './VirtualServiceProviderProps';

export function virtualServiceSpecProps(virtualServiceSpecPropsProps: VirtualServiceSpecProps): VirtualServiceSpecProps { return (virtualServiceSpecPropsProps) }

export interface VirtualServiceSpecProps {
    provider?: VirtualServiceProviderProps;
}