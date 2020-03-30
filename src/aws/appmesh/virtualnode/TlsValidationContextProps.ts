import { TlsValidationContextTrustProps } from './TlsValidationContextTrustProps';

export function tlsValidationContextProps(tlsValidationContextPropsProps: TlsValidationContextProps): TlsValidationContextProps { return (tlsValidationContextPropsProps) as unknown as TlsValidationContextProps }

export interface TlsValidationContextProps {
    trust: TlsValidationContextTrustProps;
}