import { Value } from '../../../kloudformation/Value';

export function tagFilterProps(tagFilterPropsProps: TagFilterProps): TagFilterProps { return (tagFilterPropsProps) as unknown as TagFilterProps }

export interface TagFilterProps {
    key?: Value<string>;
    type?: Value<string>;
    value?: Value<string>;
}