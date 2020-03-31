import { Value } from '../../../kloudformation/Value';

export function tlsValidationContextFileTrustProps(tlsValidationContextFileTrustPropsProps: TlsValidationContextFileTrustProps): TlsValidationContextFileTrustProps { return (tlsValidationContextFileTrustPropsProps) }

export interface TlsValidationContextFileTrustProps {
    certificateChain: Value<string>;
}