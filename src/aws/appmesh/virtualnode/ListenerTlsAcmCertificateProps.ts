import { Value } from '../../../kloudformation/Value';

export function listenerTlsAcmCertificateProps(listenerTlsAcmCertificatePropsProps: ListenerTlsAcmCertificateProps): ListenerTlsAcmCertificateProps { return (listenerTlsAcmCertificatePropsProps) as unknown as ListenerTlsAcmCertificateProps }

export interface ListenerTlsAcmCertificateProps {
    certificateArn: Value<string>;
}