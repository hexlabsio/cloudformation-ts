import { Value } from '../../../kloudformation/Value';

export function provisionedConcurrencyConfigurationProps(provisionedConcurrencyConfigurationPropsProps: ProvisionedConcurrencyConfigurationProps): ProvisionedConcurrencyConfigurationProps { return (provisionedConcurrencyConfigurationPropsProps) as unknown as ProvisionedConcurrencyConfigurationProps }

export interface ProvisionedConcurrencyConfigurationProps {
    provisionedConcurrentExecutions: Value<number>;
}