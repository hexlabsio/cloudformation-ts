import { PortMappingProps } from './PortMappingProps';

export function virtualRouterListenerProps(virtualRouterListenerPropsProps: VirtualRouterListenerProps): VirtualRouterListenerProps { return (virtualRouterListenerPropsProps) as unknown as VirtualRouterListenerProps }

export interface VirtualRouterListenerProps {
    portMapping: PortMappingProps;
}