import { PortMappingProps } from './PortMappingProps';
import { HealthCheckProps } from './HealthCheckProps';
import { ListenerTlsProps } from './ListenerTlsProps';

export function listenerProps(listenerPropsProps: ListenerProps): ListenerProps { return (listenerPropsProps) as unknown as ListenerProps }

export interface ListenerProps {
    portMapping: PortMappingProps;
    healthCheck?: HealthCheckProps;
    tLS?: ListenerTlsProps;
}