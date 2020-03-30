import { ClientPolicyTlsProps } from './ClientPolicyTlsProps';

export function clientPolicyProps(clientPolicyPropsProps: ClientPolicyProps): ClientPolicyProps { return (clientPolicyPropsProps) as unknown as ClientPolicyProps }

export interface ClientPolicyProps {
    tLS?: ClientPolicyTlsProps;
}