import { TlsProps } from './TlsProps';

export function clientAuthenticationProps(clientAuthenticationPropsProps: ClientAuthenticationProps): ClientAuthenticationProps { return (clientAuthenticationPropsProps) }

export interface ClientAuthenticationProps {
    tls?: TlsProps;
}