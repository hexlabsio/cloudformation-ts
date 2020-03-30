import { Value } from '../../../kloudformation/Value';

export function listenerTlsFileCertificateProps(listenerTlsFileCertificatePropsProps: ListenerTlsFileCertificateProps): ListenerTlsFileCertificateProps { return (listenerTlsFileCertificatePropsProps) as unknown as ListenerTlsFileCertificateProps }

export interface ListenerTlsFileCertificateProps {
    privateKey: Value<string>;
    certificateChain: Value<string>;
}