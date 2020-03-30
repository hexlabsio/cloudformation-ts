import { Value } from '../../../kloudformation/Value';
import { Tag } from '../../Tag';

export function spotFleetTagSpecificationProps(spotFleetTagSpecificationPropsProps: SpotFleetTagSpecificationProps): SpotFleetTagSpecificationProps { return (spotFleetTagSpecificationPropsProps) as unknown as SpotFleetTagSpecificationProps }

export interface SpotFleetTagSpecificationProps {
    resourceType?: Value<string>;
    tags?: Tag[];
}