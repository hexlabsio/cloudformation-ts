import { Value } from '../../../kloudformation/Value';

export function virtualNodeServiceProviderProps(virtualNodeServiceProviderPropsProps: VirtualNodeServiceProviderProps): VirtualNodeServiceProviderProps { return (virtualNodeServiceProviderPropsProps) }

export interface VirtualNodeServiceProviderProps {
    virtualNodeName: Value<string>;
}