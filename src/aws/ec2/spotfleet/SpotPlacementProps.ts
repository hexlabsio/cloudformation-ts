import { Value } from '../../../kloudformation/Value';

export function spotPlacementProps(spotPlacementPropsProps: SpotPlacementProps): SpotPlacementProps { return (spotPlacementPropsProps) as unknown as SpotPlacementProps }

export interface SpotPlacementProps {
    availabilityZone?: Value<string>;
    groupName?: Value<string>;
    tenancy?: Value<string>;
}