import { LaunchTemplateProps } from './LaunchTemplateProps';
import { InstancesDistributionProps } from './InstancesDistributionProps';

export function mixedInstancesPolicyProps(mixedInstancesPolicyPropsProps: MixedInstancesPolicyProps): MixedInstancesPolicyProps { return (mixedInstancesPolicyPropsProps) as unknown as MixedInstancesPolicyProps }

export interface MixedInstancesPolicyProps {
    launchTemplate: LaunchTemplateProps;
    instancesDistribution?: InstancesDistributionProps;
}