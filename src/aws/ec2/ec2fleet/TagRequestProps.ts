import { Value } from '../../../kloudformation/Value';

export function tagRequestProps(tagRequestPropsProps: TagRequestProps): TagRequestProps { return (tagRequestPropsProps) as unknown as TagRequestProps }

export interface TagRequestProps {
    value?: Value<string>;
    key?: Value<string>;
}