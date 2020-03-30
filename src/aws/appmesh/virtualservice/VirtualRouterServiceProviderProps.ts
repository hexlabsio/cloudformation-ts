import { Value } from '../../../kloudformation/Value';

export function virtualRouterServiceProviderProps(virtualRouterServiceProviderPropsProps: VirtualRouterServiceProviderProps): VirtualRouterServiceProviderProps { return (virtualRouterServiceProviderPropsProps) as unknown as VirtualRouterServiceProviderProps }

export interface VirtualRouterServiceProviderProps {
    virtualRouterName: Value<string>;
}