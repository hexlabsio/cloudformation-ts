import { VirtualNodeServiceProviderProps } from './VirtualNodeServiceProviderProps';
import { VirtualRouterServiceProviderProps } from './VirtualRouterServiceProviderProps';

export interface VirtualServiceProviderProps {
  virtualNode?: VirtualNodeServiceProviderProps
  virtualRouter?: VirtualRouterServiceProviderProps
}