import { FleetLaunchTemplateSpecificationProps } from './FleetLaunchTemplateSpecificationProps';
import { LaunchTemplateOverridesProps } from './LaunchTemplateOverridesProps';

export function launchTemplateConfigProps(launchTemplateConfigPropsProps: LaunchTemplateConfigProps): LaunchTemplateConfigProps { return (launchTemplateConfigPropsProps) }

export interface LaunchTemplateConfigProps {
    launchTemplateSpecification?: FleetLaunchTemplateSpecificationProps;
    overrides?: LaunchTemplateOverridesProps[];
}