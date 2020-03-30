import { Value } from '../../../kloudformation/Value';
import { ProvisionedThroughputProps } from './ProvisionedThroughputProps';

export function billingModeProps(billingModePropsProps: BillingModeProps): BillingModeProps { return (billingModePropsProps) as unknown as BillingModeProps }

export interface BillingModeProps {
    mode: Value<string>;
    provisionedThroughput?: ProvisionedThroughputProps;
}