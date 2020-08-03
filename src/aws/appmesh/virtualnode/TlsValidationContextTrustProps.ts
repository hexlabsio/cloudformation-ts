import { TlsValidationContextAcmTrustProps } from './TlsValidationContextAcmTrustProps';
import { TlsValidationContextFileTrustProps } from './TlsValidationContextFileTrustProps';

export interface TlsValidationContextTrustProps {
  aCM?: TlsValidationContextAcmTrustProps
  file?: TlsValidationContextFileTrustProps
}