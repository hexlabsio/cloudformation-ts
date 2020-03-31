import { Value } from '../../../kloudformation/Value';

export function fleetLaunchTemplateSpecificationProps(fleetLaunchTemplateSpecificationPropsProps: FleetLaunchTemplateSpecificationProps): FleetLaunchTemplateSpecificationProps { return (fleetLaunchTemplateSpecificationPropsProps) }

export interface FleetLaunchTemplateSpecificationProps {
    version: Value<string>;
    launchTemplateId?: Value<string>;
    launchTemplateName?: Value<string>;
}