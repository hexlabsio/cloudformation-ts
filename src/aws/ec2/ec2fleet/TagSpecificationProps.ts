import { Value } from '../../../kloudformation/Value';
import { TagRequestProps } from './TagRequestProps';

export function tagSpecificationProps(tagSpecificationPropsProps: TagSpecificationProps): TagSpecificationProps { return (tagSpecificationPropsProps) as unknown as TagSpecificationProps }

export interface TagSpecificationProps {
    resourceType?: Value<string>;
    tags?: TagRequestProps[];
}