import { Value } from '../../../kloudformation/Value';

export function fleetLaunchTemplateOverridesRequestProps(fleetLaunchTemplateOverridesRequestPropsProps: FleetLaunchTemplateOverridesRequestProps): FleetLaunchTemplateOverridesRequestProps { return (fleetLaunchTemplateOverridesRequestPropsProps) as unknown as FleetLaunchTemplateOverridesRequestProps }

export interface FleetLaunchTemplateOverridesRequestProps {
    weightedCapacity?: Value<number>;
    priority?: Value<number>;
    availabilityZone?: Value<string>;
    subnetId?: Value<string>;
    instanceType?: Value<string>;
    maxPrice?: Value<string>;
}