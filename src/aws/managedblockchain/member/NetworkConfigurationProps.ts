import { Value } from '../../../kloudformation/Value';
import { VotingPolicyProps } from './VotingPolicyProps';
import { NetworkFrameworkConfigurationProps } from './NetworkFrameworkConfigurationProps';

export function networkConfigurationProps(networkConfigurationPropsProps: NetworkConfigurationProps): NetworkConfigurationProps { return (networkConfigurationPropsProps) }

export interface NetworkConfigurationProps {
    frameworkVersion: Value<string>;
    votingPolicy: VotingPolicyProps;
    framework: Value<string>;
    name: Value<string>;
    description?: Value<string>;
    networkFrameworkConfiguration?: NetworkFrameworkConfigurationProps;
}