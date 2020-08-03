import { Value } from '../../../kloudformation/Value';

export interface LaunchTemplateOverridesProps {
  instanceType?: Value<string>
  weightedCapacity?: Value<string>
}