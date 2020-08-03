import { Value } from '../../../kloudformation/Value';

export interface VirtualGatewayTlsValidationContextAcmTrustProps {
  certificateAuthorityArns: Value<Value<string>[]>
}