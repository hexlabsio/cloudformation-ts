import { Value } from '../../../kloudformation/Value';

export function providerProps(providerPropsProps: ProviderProps): ProviderProps { return (providerPropsProps) }

export interface ProviderProps {
    keyArn?: Value<string>;
}