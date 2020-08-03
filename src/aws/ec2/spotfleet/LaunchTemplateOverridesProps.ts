import { Value } from '../../../kloudformation/Value';

export interface LaunchTemplateOverridesProps {
  availabilityZone?: Value<string>
  instanceType?: Value<string>
  spotPrice?: Value<string>
  subnetId?: Value<string>
  weightedCapacity?: Value<number>
}