import { Value } from '../../../kloudformation/Value';
import { ListenerTlsCertificateProps } from './ListenerTlsCertificateProps';

export function listenerTlsProps(listenerTlsPropsProps: ListenerTlsProps): ListenerTlsProps { return (listenerTlsPropsProps) as unknown as ListenerTlsProps }

export interface ListenerTlsProps {
    mode: Value<string>;
    certificate: ListenerTlsCertificateProps;
}