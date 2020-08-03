import { InstancesDistributionProps } from './InstancesDistributionProps';
import { LaunchTemplateProps } from './LaunchTemplateProps';

export interface MixedInstancesPolicyProps {
  instancesDistribution?: InstancesDistributionProps
  launchTemplate: LaunchTemplateProps
}