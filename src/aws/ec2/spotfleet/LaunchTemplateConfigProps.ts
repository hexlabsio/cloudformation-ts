import { FleetLaunchTemplateSpecificationProps } from './FleetLaunchTemplateSpecificationProps';
import { LaunchTemplateOverridesProps } from './LaunchTemplateOverridesProps';

export interface LaunchTemplateConfigProps {
  launchTemplateSpecification?: FleetLaunchTemplateSpecificationProps
  overrides?: LaunchTemplateOverridesProps[]
}