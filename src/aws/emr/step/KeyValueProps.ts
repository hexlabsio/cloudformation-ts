import { Value } from '../../../kloudformation/Value';

export function keyValueProps(keyValuePropsProps: KeyValueProps): KeyValueProps { return (keyValuePropsProps) as unknown as KeyValueProps }

export interface KeyValueProps {
    key?: Value<string>;
    value?: Value<string>;
}