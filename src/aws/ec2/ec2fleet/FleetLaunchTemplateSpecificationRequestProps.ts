import { Value } from '../../../kloudformation/Value';

export function fleetLaunchTemplateSpecificationRequestProps(fleetLaunchTemplateSpecificationRequestPropsProps: FleetLaunchTemplateSpecificationRequestProps): FleetLaunchTemplateSpecificationRequestProps { return (fleetLaunchTemplateSpecificationRequestPropsProps) as unknown as FleetLaunchTemplateSpecificationRequestProps }

export interface FleetLaunchTemplateSpecificationRequestProps {
    launchTemplateName?: Value<string>;
    version?: Value<string>;
    launchTemplateId?: Value<string>;
}