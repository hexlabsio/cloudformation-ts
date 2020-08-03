import { AutoScalingPolicyProps } from './instanceGroupConfig/AutoScalingPolicyProps';
import { Value } from '../../kloudformation/Value';
import { ConfigurationProps } from './instanceGroupConfig/ConfigurationProps';
import { EbsConfigurationProps } from './instanceGroupConfig/EbsConfigurationProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function instanceGroupConfig(instanceGroupConfigProps: InstanceGroupConfig): InstanceGroupConfig { return ({ ...instanceGroupConfigProps, _logicalType: '' }) }
  
export interface InstanceGroupConfig extends KloudResource {
  autoScalingPolicy?: AutoScalingPolicyProps
  bidPrice?: Value<string>
  configurations?: ConfigurationProps[]
  ebsConfiguration?: EbsConfigurationProps
  instanceCount: Value<number>
  instanceRole: Value<string>
  instanceType: Value<string>
  jobFlowId: Value<string>
  market?: Value<string>
  name?: Value<string>
}