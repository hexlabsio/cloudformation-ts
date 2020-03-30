import { Value } from '../../../kloudformation/Value';

export function quotaSettingsProps(quotaSettingsPropsProps: QuotaSettingsProps): QuotaSettingsProps { return (quotaSettingsPropsProps) as unknown as QuotaSettingsProps }

export interface QuotaSettingsProps {
    limit?: Value<number>;
    offset?: Value<number>;
    period?: Value<string>;
}