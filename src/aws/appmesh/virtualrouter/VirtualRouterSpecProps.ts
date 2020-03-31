import { VirtualRouterListenerProps } from './VirtualRouterListenerProps';

export function virtualRouterSpecProps(virtualRouterSpecPropsProps: VirtualRouterSpecProps): VirtualRouterSpecProps { return (virtualRouterSpecPropsProps) }

export interface VirtualRouterSpecProps {
    listeners: VirtualRouterListenerProps[];
}