import { TlsProps } from './TlsProps';

export function clientAuthenticationProps(clientAuthenticationPropsProps: ClientAuthenticationProps): ClientAuthenticationProps { return (clientAuthenticationPropsProps) as unknown as ClientAuthenticationProps }

export interface ClientAuthenticationProps {
    tls?: TlsProps;
}