import { Value } from '../../../kloudformation/Value';

export function dnsRecordProps(dnsRecordPropsProps: DnsRecordProps): DnsRecordProps { return (dnsRecordPropsProps) }

export interface DnsRecordProps {
    type: Value<string>;
    tTL: Value<number>;
}