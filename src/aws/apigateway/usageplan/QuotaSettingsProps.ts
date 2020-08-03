import { Value } from '../../../kloudformation/Value';

export interface QuotaSettingsProps {
  limit?: Value<number>
  offset?: Value<number>
  period?: Value<string>
}