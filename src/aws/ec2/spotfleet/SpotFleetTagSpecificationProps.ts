import { Value } from '../../../kloudformation/Value';
import { Tag } from '../../Tag';

export function spotFleetTagSpecificationProps(spotFleetTagSpecificationPropsProps: SpotFleetTagSpecificationProps): SpotFleetTagSpecificationProps { return (spotFleetTagSpecificationPropsProps) }

export interface SpotFleetTagSpecificationProps {
    resourceType?: Value<string>;
    tags?: Tag[];
}