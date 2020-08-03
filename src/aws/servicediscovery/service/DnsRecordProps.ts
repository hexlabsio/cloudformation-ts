import { Value } from '../../../kloudformation/Value';

export interface DnsRecordProps {
  type: Value<string>
  tTL: Value<number>
}