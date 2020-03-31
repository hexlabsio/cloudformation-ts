import { PlacementProps } from './PlacementProps';
import { Value } from '../../../kloudformation/Value';

export function fleetLaunchTemplateOverridesRequestProps(fleetLaunchTemplateOverridesRequestPropsProps: FleetLaunchTemplateOverridesRequestProps): FleetLaunchTemplateOverridesRequestProps { return (fleetLaunchTemplateOverridesRequestPropsProps) }

export interface FleetLaunchTemplateOverridesRequestProps {
    placement?: PlacementProps;
    weightedCapacity?: Value<number>;
    priority?: Value<number>;
    availabilityZone?: Value<string>;
    subnetId?: Value<string>;
    instanceType?: Value<string>;
    maxPrice?: Value<string>;
}