import { VirtualGatewayLoggingProps } from './VirtualGatewayLoggingProps';
import { VirtualGatewayListenerProps } from './VirtualGatewayListenerProps';
import { VirtualGatewayBackendDefaultsProps } from './VirtualGatewayBackendDefaultsProps';

export interface VirtualGatewaySpecProps {
  logging?: VirtualGatewayLoggingProps
  listeners: VirtualGatewayListenerProps[]
  backendDefaults?: VirtualGatewayBackendDefaultsProps
}