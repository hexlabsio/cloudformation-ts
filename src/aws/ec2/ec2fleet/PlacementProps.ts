import { Value } from '../../../kloudformation/Value';

export function placementProps(placementPropsProps: PlacementProps): PlacementProps { return (placementPropsProps) }

export interface PlacementProps {
    groupName?: Value<string>;
    tenancy?: Value<string>;
    spreadDomain?: Value<string>;
    partitionNumber?: Value<number>;
    availabilityZone?: Value<string>;
    affinity?: Value<string>;
    hostId?: Value<string>;
    hostResourceGroupArn?: Value<string>;
}