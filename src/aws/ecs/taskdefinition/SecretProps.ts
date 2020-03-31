import { Value } from '../../../kloudformation/Value';

export function secretProps(secretPropsProps: SecretProps): SecretProps { return (secretPropsProps) }

export interface SecretProps {
    name: Value<string>;
    valueFrom: Value<string>;
}