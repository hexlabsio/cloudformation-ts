import { VirtualGatewayListenerTlsAcmCertificateProps } from './VirtualGatewayListenerTlsAcmCertificateProps';
import { VirtualGatewayListenerTlsFileCertificateProps } from './VirtualGatewayListenerTlsFileCertificateProps';

export interface VirtualGatewayListenerTlsCertificateProps {
  aCM?: VirtualGatewayListenerTlsAcmCertificateProps
  file?: VirtualGatewayListenerTlsFileCertificateProps
}