import { FleetLaunchTemplateSpecificationRequestProps } from './FleetLaunchTemplateSpecificationRequestProps';
import { FleetLaunchTemplateOverridesRequestProps } from './FleetLaunchTemplateOverridesRequestProps';

export function fleetLaunchTemplateConfigRequestProps(fleetLaunchTemplateConfigRequestPropsProps: FleetLaunchTemplateConfigRequestProps): FleetLaunchTemplateConfigRequestProps { return (fleetLaunchTemplateConfigRequestPropsProps) }

export interface FleetLaunchTemplateConfigRequestProps {
    launchTemplateSpecification?: FleetLaunchTemplateSpecificationRequestProps;
    overrides?: FleetLaunchTemplateOverridesRequestProps[];
}