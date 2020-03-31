import { Value } from '../../../kloudformation/Value';

export function quotaSettingsProps(quotaSettingsPropsProps: QuotaSettingsProps): QuotaSettingsProps { return (quotaSettingsPropsProps) }

export interface QuotaSettingsProps {
    limit?: Value<number>;
    offset?: Value<number>;
    period?: Value<string>;
}