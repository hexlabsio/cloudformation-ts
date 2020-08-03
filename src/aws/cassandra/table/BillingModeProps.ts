import { Value } from '../../../kloudformation/Value';
import { ProvisionedThroughputProps } from './ProvisionedThroughputProps';

export interface BillingModeProps {
  mode: Value<string>
  provisionedThroughput?: ProvisionedThroughputProps
}