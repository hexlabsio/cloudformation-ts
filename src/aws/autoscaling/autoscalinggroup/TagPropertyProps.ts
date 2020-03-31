import { Value } from '../../../kloudformation/Value';

export function tagPropertyProps(tagPropertyPropsProps: TagPropertyProps): TagPropertyProps { return (tagPropertyPropsProps) }

export interface TagPropertyProps {
    key: Value<string>;
    propagateAtLaunch: Value<boolean>;
    value: Value<string>;
}