import { Value } from '../../kloudformation/Value';
import { AutoScalingPolicyProps } from './instancegroupconfig/AutoScalingPolicyProps';
import { ConfigurationProps } from './instancegroupconfig/ConfigurationProps';
import { EbsConfigurationProps } from './instancegroupconfig/EbsConfigurationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type InstanceGroupConfigAttributes = {  }
export function instanceGroupConfig(instanceGroupConfigProps: InstanceGroupConfig): InstanceGroupConfig & { attributes: InstanceGroupConfigAttributes } { return ({ ...instanceGroupConfigProps, _logicalType: 'AWS::EMR::InstanceGroupConfig', attributes: {  } }) }

export interface InstanceGroupConfig extends KloudResource {
    instanceCount: Value<number>;
    instanceRole: Value<string>;
    instanceType: Value<string>;
    jobFlowId: Value<string>;
    autoScalingPolicy?: AutoScalingPolicyProps;
    bidPrice?: Value<string>;
    configurations?: ConfigurationProps[];
    ebsConfiguration?: EbsConfigurationProps;
    market?: Value<string>;
    name?: Value<string>;
}