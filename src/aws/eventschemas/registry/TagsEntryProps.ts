import { Value } from '../../../kloudformation/Value';

export function tagsEntryProps(tagsEntryPropsProps: TagsEntryProps): TagsEntryProps { return (tagsEntryPropsProps) }

export interface TagsEntryProps {
    value: Value<string>;
    key: Value<string>;
}