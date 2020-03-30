import { Value } from '../../../kloudformation/Value';

export function dnsServiceDiscoveryProps(dnsServiceDiscoveryPropsProps: DnsServiceDiscoveryProps): DnsServiceDiscoveryProps { return (dnsServiceDiscoveryPropsProps) as unknown as DnsServiceDiscoveryProps }

export interface DnsServiceDiscoveryProps {
    hostname: Value<string>;
}