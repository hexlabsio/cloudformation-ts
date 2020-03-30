import { VersionWeightProps } from './VersionWeightProps';

export function aliasRoutingConfigurationProps(aliasRoutingConfigurationPropsProps: AliasRoutingConfigurationProps): AliasRoutingConfigurationProps { return (aliasRoutingConfigurationPropsProps) as unknown as AliasRoutingConfigurationProps }

export interface AliasRoutingConfigurationProps {
    additionalVersionWeights: VersionWeightProps[];
}