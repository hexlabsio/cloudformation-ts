import { VirtualRouterListenerProps } from './VirtualRouterListenerProps';

export function virtualRouterSpecProps(virtualRouterSpecPropsProps: VirtualRouterSpecProps): VirtualRouterSpecProps { return (virtualRouterSpecPropsProps) as unknown as VirtualRouterSpecProps }

export interface VirtualRouterSpecProps {
    listeners: VirtualRouterListenerProps[];
}