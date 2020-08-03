import { Value } from '../../../kloudformation/Value';

export interface TargetDescriptionProps {
  availabilityZone?: Value<string>
  id: Value<string>
  port?: Value<number>
}