import { Value } from '../../../kloudformation/Value';
import { VirtualGatewayListenerTlsCertificateProps } from './VirtualGatewayListenerTlsCertificateProps';

export interface VirtualGatewayListenerTlsProps {
  mode: Value<string>
  certificate: VirtualGatewayListenerTlsCertificateProps
}