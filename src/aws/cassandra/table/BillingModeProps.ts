import { Value } from '../../../kloudformation/Value';
import { ProvisionedThroughputProps } from './ProvisionedThroughputProps';

export function billingModeProps(billingModePropsProps: BillingModeProps): BillingModeProps { return (billingModePropsProps) }

export interface BillingModeProps {
    mode: Value<string>;
    provisionedThroughput?: ProvisionedThroughputProps;
}