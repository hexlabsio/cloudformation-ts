import { Value } from '../../../kloudformation/Value';

export function provisionedConcurrencyConfigurationProps(provisionedConcurrencyConfigurationPropsProps: ProvisionedConcurrencyConfigurationProps): ProvisionedConcurrencyConfigurationProps { return (provisionedConcurrencyConfigurationPropsProps) }

export interface ProvisionedConcurrencyConfigurationProps {
    provisionedConcurrentExecutions: Value<number>;
}