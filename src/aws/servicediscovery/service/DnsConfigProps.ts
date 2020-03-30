import { DnsRecordProps } from './DnsRecordProps';
import { Value } from '../../../kloudformation/Value';

export function dnsConfigProps(dnsConfigPropsProps: DnsConfigProps): DnsConfigProps { return (dnsConfigPropsProps) as unknown as DnsConfigProps }

export interface DnsConfigProps {
    dnsRecords: DnsRecordProps[];
    routingPolicy?: Value<string>;
    namespaceId?: Value<string>;
}