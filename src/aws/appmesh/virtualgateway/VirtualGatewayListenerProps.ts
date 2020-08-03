import { VirtualGatewayHealthCheckPolicyProps } from './VirtualGatewayHealthCheckPolicyProps';
import { VirtualGatewayListenerTlsProps } from './VirtualGatewayListenerTlsProps';
import { VirtualGatewayPortMappingProps } from './VirtualGatewayPortMappingProps';

export interface VirtualGatewayListenerProps {
  healthCheck?: VirtualGatewayHealthCheckPolicyProps
  tLS?: VirtualGatewayListenerTlsProps
  portMapping: VirtualGatewayPortMappingProps
}