import { Value } from '../../../kloudformation/Value';

export function listenerTlsAcmCertificateProps(listenerTlsAcmCertificatePropsProps: ListenerTlsAcmCertificateProps): ListenerTlsAcmCertificateProps { return (listenerTlsAcmCertificatePropsProps) }

export interface ListenerTlsAcmCertificateProps {
    certificateArn: Value<string>;
}