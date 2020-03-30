import { Value } from '../../../kloudformation/Value';

export function tlsValidationContextFileTrustProps(tlsValidationContextFileTrustPropsProps: TlsValidationContextFileTrustProps): TlsValidationContextFileTrustProps { return (tlsValidationContextFileTrustPropsProps) as unknown as TlsValidationContextFileTrustProps }

export interface TlsValidationContextFileTrustProps {
    certificateChain: Value<string>;
}