import { Value } from '../../../kloudformation/Value';

export function keyValuePairProps(keyValuePairPropsProps: KeyValuePairProps): KeyValuePairProps { return (keyValuePairPropsProps) }

export interface KeyValuePairProps {
    name?: Value<string>;
    value?: Value<string>;
}