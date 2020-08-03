import { Value } from '../../../kloudformation/Value';

export interface ProvisioningPreferencesProps {
  stackSetAccounts?: Value<Value<string>[]>
  stackSetFailureToleranceCount?: Value<number>
  stackSetFailureTolerancePercentage?: Value<number>
  stackSetMaxConcurrencyCount?: Value<number>
  stackSetMaxConcurrencyPercentage?: Value<number>
  stackSetOperationType?: Value<string>
  stackSetRegions?: Value<Value<string>[]>
}