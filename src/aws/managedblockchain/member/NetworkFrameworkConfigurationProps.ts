import { NetworkFabricConfigurationProps } from './NetworkFabricConfigurationProps';

export function networkFrameworkConfigurationProps(networkFrameworkConfigurationPropsProps: NetworkFrameworkConfigurationProps): NetworkFrameworkConfigurationProps { return (networkFrameworkConfigurationPropsProps) as unknown as NetworkFrameworkConfigurationProps }

export interface NetworkFrameworkConfigurationProps {
    networkFabricConfiguration?: NetworkFabricConfigurationProps;
}