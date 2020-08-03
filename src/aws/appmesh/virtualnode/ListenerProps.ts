import { ListenerTimeoutProps } from './ListenerTimeoutProps';
import { HealthCheckProps } from './HealthCheckProps';
import { ListenerTlsProps } from './ListenerTlsProps';
import { PortMappingProps } from './PortMappingProps';

export interface ListenerProps {
  timeout?: ListenerTimeoutProps
  healthCheck?: HealthCheckProps
  tLS?: ListenerTlsProps
  portMapping: PortMappingProps
}