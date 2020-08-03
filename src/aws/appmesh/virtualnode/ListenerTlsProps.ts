import { Value } from '../../../kloudformation/Value';
import { ListenerTlsCertificateProps } from './ListenerTlsCertificateProps';

export interface ListenerTlsProps {
  mode: Value<string>
  certificate: ListenerTlsCertificateProps
}