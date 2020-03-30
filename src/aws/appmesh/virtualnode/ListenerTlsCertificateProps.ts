import { ListenerTlsAcmCertificateProps } from './ListenerTlsAcmCertificateProps';
import { ListenerTlsFileCertificateProps } from './ListenerTlsFileCertificateProps';

export function listenerTlsCertificateProps(listenerTlsCertificatePropsProps: ListenerTlsCertificateProps): ListenerTlsCertificateProps { return (listenerTlsCertificatePropsProps) as unknown as ListenerTlsCertificateProps }

export interface ListenerTlsCertificateProps {
    aCM?: ListenerTlsAcmCertificateProps;
    file?: ListenerTlsFileCertificateProps;
}