import { Value } from '../../../kloudformation/Value';

export function registryCredentialProps(registryCredentialPropsProps: RegistryCredentialProps): RegistryCredentialProps { return (registryCredentialPropsProps) as unknown as RegistryCredentialProps }

export interface RegistryCredentialProps {
    credential: Value<string>;
    credentialProvider: Value<string>;
}