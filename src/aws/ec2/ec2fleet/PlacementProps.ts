import { Value } from '../../../kloudformation/Value';

export interface PlacementProps {
  groupName?: Value<string>
  tenancy?: Value<string>
  spreadDomain?: Value<string>
  partitionNumber?: Value<number>
  availabilityZone?: Value<string>
  affinity?: Value<string>
  hostId?: Value<string>
  hostResourceGroupArn?: Value<string>
}