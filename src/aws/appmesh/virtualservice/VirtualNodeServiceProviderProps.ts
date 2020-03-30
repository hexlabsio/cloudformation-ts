import { Value } from '../../../kloudformation/Value';

export function virtualNodeServiceProviderProps(virtualNodeServiceProviderPropsProps: VirtualNodeServiceProviderProps): VirtualNodeServiceProviderProps { return (virtualNodeServiceProviderPropsProps) as unknown as VirtualNodeServiceProviderProps }

export interface VirtualNodeServiceProviderProps {
    virtualNodeName: Value<string>;
}