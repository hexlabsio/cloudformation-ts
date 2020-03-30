import { Value } from '../../../kloudformation/Value';

export function tlsValidationContextAcmTrustProps(tlsValidationContextAcmTrustPropsProps: TlsValidationContextAcmTrustProps): TlsValidationContextAcmTrustProps { return (tlsValidationContextAcmTrustPropsProps) as unknown as TlsValidationContextAcmTrustProps }

export interface TlsValidationContextAcmTrustProps {
    certificateAuthorityArns: Value<Value<string>[]>;
}