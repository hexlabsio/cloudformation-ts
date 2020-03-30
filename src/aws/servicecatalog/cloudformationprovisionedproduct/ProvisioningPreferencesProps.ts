import { Value } from '../../../kloudformation/Value';

export function provisioningPreferencesProps(provisioningPreferencesPropsProps: ProvisioningPreferencesProps): ProvisioningPreferencesProps { return (provisioningPreferencesPropsProps) as unknown as ProvisioningPreferencesProps }

export interface ProvisioningPreferencesProps {
    stackSetAccounts?: Value<Value<string>[]>;
    stackSetFailureToleranceCount?: Value<number>;
    stackSetMaxConcurrencyPercentage?: Value<number>;
    stackSetMaxConcurrencyCount?: Value<number>;
    stackSetRegions?: Value<Value<string>[]>;
    stackSetOperationType?: Value<string>;
    stackSetFailureTolerancePercentage?: Value<number>;
}