import { DnsRecordProps } from './DnsRecordProps';
import { Value } from '../../../kloudformation/Value';

export interface DnsConfigProps {
  dnsRecords: DnsRecordProps[]
  routingPolicy?: Value<string>
  namespaceId?: Value<string>
}