import { Value } from '../../../kloudformation/Value';
import { VotingPolicyProps } from './VotingPolicyProps';
import { NetworkFrameworkConfigurationProps } from './NetworkFrameworkConfigurationProps';

export interface NetworkConfigurationProps {
  description?: Value<string>
  frameworkVersion: Value<string>
  votingPolicy: VotingPolicyProps
  framework: Value<string>
  name: Value<string>
  networkFrameworkConfiguration?: NetworkFrameworkConfigurationProps
}