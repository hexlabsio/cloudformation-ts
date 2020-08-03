import { ListenerTlsAcmCertificateProps } from './ListenerTlsAcmCertificateProps';
import { ListenerTlsFileCertificateProps } from './ListenerTlsFileCertificateProps';

export interface ListenerTlsCertificateProps {
  aCM?: ListenerTlsAcmCertificateProps
  file?: ListenerTlsFileCertificateProps
}