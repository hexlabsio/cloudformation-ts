import { FleetLaunchTemplateSpecificationRequestProps } from './FleetLaunchTemplateSpecificationRequestProps';
import { FleetLaunchTemplateOverridesRequestProps } from './FleetLaunchTemplateOverridesRequestProps';

export interface FleetLaunchTemplateConfigRequestProps {
  launchTemplateSpecification?: FleetLaunchTemplateSpecificationRequestProps
  overrides?: FleetLaunchTemplateOverridesRequestProps[]
}