import { AutoScalingPolicyProps } from './AutoScalingPolicyProps';
import { Value } from '../../../kloudformation/Value';
import { ConfigurationProps } from './ConfigurationProps';
import { EbsConfigurationProps } from './EbsConfigurationProps';

export interface InstanceGroupConfigProps {
  autoScalingPolicy?: AutoScalingPolicyProps
  bidPrice?: Value<string>
  configurations?: ConfigurationProps[]
  ebsConfiguration?: EbsConfigurationProps
  instanceCount: Value<number>
  instanceType: Value<string>
  market?: Value<string>
  name?: Value<string>
}