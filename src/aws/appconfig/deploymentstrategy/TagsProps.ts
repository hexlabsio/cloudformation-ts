import { Value } from '../../../kloudformation/Value';

export function tagsProps(tagsPropsProps: TagsProps): TagsProps { return (tagsPropsProps) }

export interface TagsProps {
    value?: Value<string>;
    key?: Value<string>;
}