import { Value } from '../../../kloudformation/Value';
import { TagRequestProps } from './TagRequestProps';

export function tagSpecificationProps(tagSpecificationPropsProps: TagSpecificationProps): TagSpecificationProps { return (tagSpecificationPropsProps) }

export interface TagSpecificationProps {
    resourceType?: Value<string>;
    tags?: TagRequestProps[];
}