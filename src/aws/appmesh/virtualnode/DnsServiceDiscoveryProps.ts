import { Value } from '../../../kloudformation/Value';

export function dnsServiceDiscoveryProps(dnsServiceDiscoveryPropsProps: DnsServiceDiscoveryProps): DnsServiceDiscoveryProps { return (dnsServiceDiscoveryPropsProps) }

export interface DnsServiceDiscoveryProps {
    hostname: Value<string>;
}