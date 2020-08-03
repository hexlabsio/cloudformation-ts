import { VirtualGatewayTlsValidationContextAcmTrustProps } from './VirtualGatewayTlsValidationContextAcmTrustProps';
import { VirtualGatewayTlsValidationContextFileTrustProps } from './VirtualGatewayTlsValidationContextFileTrustProps';

export interface VirtualGatewayTlsValidationContextTrustProps {
  aCM?: VirtualGatewayTlsValidationContextAcmTrustProps
  file?: VirtualGatewayTlsValidationContextFileTrustProps
}