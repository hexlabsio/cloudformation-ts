import { Value } from '../../../kloudformation/Value';

export function secretProps(secretPropsProps: SecretProps): SecretProps { return (secretPropsProps) as unknown as SecretProps }

export interface SecretProps {
    name: Value<string>;
    valueFrom: Value<string>;
}