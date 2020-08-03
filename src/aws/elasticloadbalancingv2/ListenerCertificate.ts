import { CertificateProps } from './listenerCertificate/CertificateProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function listenerCertificate(listenerCertificateProps: ListenerCertificate): ListenerCertificate { return ({ ...listenerCertificateProps, _logicalType: '' }) }
  
export interface ListenerCertificate extends KloudResource {
  certificates: CertificateProps[]
  listenerArn: Value<string>
}