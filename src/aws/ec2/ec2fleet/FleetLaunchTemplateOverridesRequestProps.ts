import { Value } from '../../../kloudformation/Value';
import { PlacementProps } from './PlacementProps';

export interface FleetLaunchTemplateOverridesRequestProps {
  weightedCapacity?: Value<number>
  placement?: PlacementProps
  priority?: Value<number>
  availabilityZone?: Value<string>
  subnetId?: Value<string>
  instanceType?: Value<string>
  maxPrice?: Value<string>
}