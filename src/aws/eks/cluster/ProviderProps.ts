import { Value } from '../../../kloudformation/Value';

export function providerProps(providerPropsProps: ProviderProps): ProviderProps { return (providerPropsProps) as unknown as ProviderProps }

export interface ProviderProps {
    keyArn?: Value<string>;
}