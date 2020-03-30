import { DnsServiceDiscoveryProps } from './DnsServiceDiscoveryProps';
import { AwsCloudMapServiceDiscoveryProps } from './AwsCloudMapServiceDiscoveryProps';

export function serviceDiscoveryProps(serviceDiscoveryPropsProps: ServiceDiscoveryProps): ServiceDiscoveryProps { return (serviceDiscoveryPropsProps) as unknown as ServiceDiscoveryProps }

export interface ServiceDiscoveryProps {
    dNS?: DnsServiceDiscoveryProps;
    aWSCloudMap?: AwsCloudMapServiceDiscoveryProps;
}