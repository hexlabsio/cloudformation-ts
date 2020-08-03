import { DnsServiceDiscoveryProps } from './DnsServiceDiscoveryProps';
import { AwsCloudMapServiceDiscoveryProps } from './AwsCloudMapServiceDiscoveryProps';

export interface ServiceDiscoveryProps {
  dNS?: DnsServiceDiscoveryProps
  aWSCloudMap?: AwsCloudMapServiceDiscoveryProps
}