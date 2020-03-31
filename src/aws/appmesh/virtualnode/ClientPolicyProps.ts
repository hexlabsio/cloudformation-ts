import { ClientPolicyTlsProps } from './ClientPolicyTlsProps';

export function clientPolicyProps(clientPolicyPropsProps: ClientPolicyProps): ClientPolicyProps { return (clientPolicyPropsProps) }

export interface ClientPolicyProps {
    tLS?: ClientPolicyTlsProps;
}