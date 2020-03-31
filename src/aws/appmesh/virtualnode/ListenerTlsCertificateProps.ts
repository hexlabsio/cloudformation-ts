import { ListenerTlsAcmCertificateProps } from './ListenerTlsAcmCertificateProps';
import { ListenerTlsFileCertificateProps } from './ListenerTlsFileCertificateProps';

export function listenerTlsCertificateProps(listenerTlsCertificatePropsProps: ListenerTlsCertificateProps): ListenerTlsCertificateProps { return (listenerTlsCertificatePropsProps) }

export interface ListenerTlsCertificateProps {
    aCM?: ListenerTlsAcmCertificateProps;
    file?: ListenerTlsFileCertificateProps;
}