import { LoggingProps } from './LoggingProps';
import { BackendProps } from './BackendProps';
import { ListenerProps } from './ListenerProps';
import { BackendDefaultsProps } from './BackendDefaultsProps';
import { ServiceDiscoveryProps } from './ServiceDiscoveryProps';

export function virtualNodeSpecProps(virtualNodeSpecPropsProps: VirtualNodeSpecProps): VirtualNodeSpecProps { return (virtualNodeSpecPropsProps) }

export interface VirtualNodeSpecProps {
    logging?: LoggingProps;
    backends?: BackendProps[];
    listeners?: ListenerProps[];
    backendDefaults?: BackendDefaultsProps;
    serviceDiscovery?: ServiceDiscoveryProps;
}