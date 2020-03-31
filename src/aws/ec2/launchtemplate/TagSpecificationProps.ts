import { Value } from '../../../kloudformation/Value';
import { Tag } from '../../Tag';

export function tagSpecificationProps(tagSpecificationPropsProps: TagSpecificationProps): TagSpecificationProps { return (tagSpecificationPropsProps) }

export interface TagSpecificationProps {
    resourceType?: Value<string>;
    tags?: Tag[];
}