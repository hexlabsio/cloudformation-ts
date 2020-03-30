import { Value } from '../../../kloudformation/Value';

export function networkFabricConfigurationProps(networkFabricConfigurationPropsProps: NetworkFabricConfigurationProps): NetworkFabricConfigurationProps { return (networkFabricConfigurationPropsProps) as unknown as NetworkFabricConfigurationProps }

export interface NetworkFabricConfigurationProps {
    edition: Value<string>;
}