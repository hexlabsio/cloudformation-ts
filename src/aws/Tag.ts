import { Value } from '../kloudformation/Value';

export function tag(tagProps: Tag): Tag { return (tagProps) }

export interface Tag {
    key: Value<string>;
    value: Value<string>;
}