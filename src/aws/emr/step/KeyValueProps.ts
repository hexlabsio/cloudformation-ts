import { Value } from '../../../kloudformation/Value';

export function keyValueProps(keyValuePropsProps: KeyValueProps): KeyValueProps { return (keyValuePropsProps) }

export interface KeyValueProps {
    key?: Value<string>;
    value?: Value<string>;
}