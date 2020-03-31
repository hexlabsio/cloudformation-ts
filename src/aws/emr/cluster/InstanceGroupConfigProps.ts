import { Value } from '../../../kloudformation/Value';
import { AutoScalingPolicyProps } from './AutoScalingPolicyProps';
import { ConfigurationProps } from './ConfigurationProps';
import { EbsConfigurationProps } from './EbsConfigurationProps';

export function instanceGroupConfigProps(instanceGroupConfigPropsProps: InstanceGroupConfigProps): InstanceGroupConfigProps { return (instanceGroupConfigPropsProps) }

export interface InstanceGroupConfigProps {
    instanceCount: Value<number>;
    instanceType: Value<string>;
    autoScalingPolicy?: AutoScalingPolicyProps;
    bidPrice?: Value<string>;
    configurations?: ConfigurationProps[];
    ebsConfiguration?: EbsConfigurationProps;
    market?: Value<string>;
    name?: Value<string>;
}