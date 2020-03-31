import { TlsValidationContextTrustProps } from './TlsValidationContextTrustProps';

export function tlsValidationContextProps(tlsValidationContextPropsProps: TlsValidationContextProps): TlsValidationContextProps { return (tlsValidationContextPropsProps) }

export interface TlsValidationContextProps {
    trust: TlsValidationContextTrustProps;
}