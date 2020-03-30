import { TlsValidationContextAcmTrustProps } from './TlsValidationContextAcmTrustProps';
import { TlsValidationContextFileTrustProps } from './TlsValidationContextFileTrustProps';

export function tlsValidationContextTrustProps(tlsValidationContextTrustPropsProps: TlsValidationContextTrustProps): TlsValidationContextTrustProps { return (tlsValidationContextTrustPropsProps) as unknown as TlsValidationContextTrustProps }

export interface TlsValidationContextTrustProps {
    aCM?: TlsValidationContextAcmTrustProps;
    file?: TlsValidationContextFileTrustProps;
}