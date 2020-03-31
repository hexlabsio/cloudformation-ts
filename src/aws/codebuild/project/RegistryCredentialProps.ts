import { Value } from '../../../kloudformation/Value';

export function registryCredentialProps(registryCredentialPropsProps: RegistryCredentialProps): RegistryCredentialProps { return (registryCredentialPropsProps) }

export interface RegistryCredentialProps {
    credential: Value<string>;
    credentialProvider: Value<string>;
}