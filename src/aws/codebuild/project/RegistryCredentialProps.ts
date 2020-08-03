import { Value } from '../../../kloudformation/Value';

export interface RegistryCredentialProps {
  credential: Value<string>
  credentialProvider: Value<string>
}