import { Value } from '../../../kloudformation/Value';

export function listenerTlsFileCertificateProps(listenerTlsFileCertificatePropsProps: ListenerTlsFileCertificateProps): ListenerTlsFileCertificateProps { return (listenerTlsFileCertificatePropsProps) }

export interface ListenerTlsFileCertificateProps {
    privateKey: Value<string>;
    certificateChain: Value<string>;
}