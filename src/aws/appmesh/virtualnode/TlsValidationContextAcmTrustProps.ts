import { Value } from '../../../kloudformation/Value';

export interface TlsValidationContextAcmTrustProps {
  certificateAuthorityArns: Value<Value<string>[]>
}