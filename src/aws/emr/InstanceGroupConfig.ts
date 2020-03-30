import { Value } from '../../kloudformation/Value';
import { AutoScalingPolicyProps } from './instancegroupconfig/AutoScalingPolicyProps';
import { ConfigurationProps } from './instancegroupconfig/ConfigurationProps';
import { EbsConfigurationProps } from './instancegroupconfig/EbsConfigurationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function instanceGroupConfig(instanceGroupConfigProps: InstanceGroupConfig & { logicalName?: string }): InstanceGroupConfig { return ({ ...instanceGroupConfigProps, _logicalType: 'AWS::EMR::InstanceGroupConfig' }) as unknown as InstanceGroupConfig }

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