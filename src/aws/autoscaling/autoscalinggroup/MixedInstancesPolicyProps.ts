import { LaunchTemplateProps } from './LaunchTemplateProps';
import { InstancesDistributionProps } from './InstancesDistributionProps';

export function mixedInstancesPolicyProps(mixedInstancesPolicyPropsProps: MixedInstancesPolicyProps): MixedInstancesPolicyProps { return (mixedInstancesPolicyPropsProps) }

export interface MixedInstancesPolicyProps {
    launchTemplate: LaunchTemplateProps;
    instancesDistribution?: InstancesDistributionProps;
}