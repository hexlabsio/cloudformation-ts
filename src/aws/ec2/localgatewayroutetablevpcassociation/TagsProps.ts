import { Tag } from '../../Tag';

export function tagsProps(tagsPropsProps: TagsProps): TagsProps { return (tagsPropsProps) as unknown as TagsProps }

export interface TagsProps {
    tags?: Tag[];
}