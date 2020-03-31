import { Value } from '../../../kloudformation/Value';

export function tlsValidationContextAcmTrustProps(tlsValidationContextAcmTrustPropsProps: TlsValidationContextAcmTrustProps): TlsValidationContextAcmTrustProps { return (tlsValidationContextAcmTrustPropsProps) }

export interface TlsValidationContextAcmTrustProps {
    certificateAuthorityArns: Value<Value<string>[]>;
}