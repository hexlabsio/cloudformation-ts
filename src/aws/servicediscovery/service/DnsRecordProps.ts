import { Value } from '../../../kloudformation/Value';

export function dnsRecordProps(dnsRecordPropsProps: DnsRecordProps): DnsRecordProps { return (dnsRecordPropsProps) as unknown as DnsRecordProps }

export interface DnsRecordProps {
    type: Value<string>;
    tTL: Value<number>;
}