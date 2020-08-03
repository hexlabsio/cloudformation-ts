import { Value } from '../../../kloudformation/Value';

export interface SpotPlacementProps {
  availabilityZone?: Value<string>
  groupName?: Value<string>
  tenancy?: Value<string>
}