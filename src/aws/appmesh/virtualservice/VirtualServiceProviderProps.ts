import { VirtualNodeServiceProviderProps } from './VirtualNodeServiceProviderProps';
import { VirtualRouterServiceProviderProps } from './VirtualRouterServiceProviderProps';

export function virtualServiceProviderProps(virtualServiceProviderPropsProps: VirtualServiceProviderProps): VirtualServiceProviderProps { return (virtualServiceProviderPropsProps) as unknown as VirtualServiceProviderProps }

export interface VirtualServiceProviderProps {
    virtualNode?: VirtualNodeServiceProviderProps;
    virtualRouter?: VirtualRouterServiceProviderProps;
}