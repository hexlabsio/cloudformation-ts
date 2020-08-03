import { Value } from '../../../kloudformation/Value';
import { EnvironmentVariableProps } from './EnvironmentVariableProps';
import { RegistryCredentialProps } from './RegistryCredentialProps';

export interface EnvironmentProps {
  type: Value<string>
  environmentVariables?: EnvironmentVariableProps[]
  privilegedMode?: Value<boolean>
  imagePullCredentialsType?: Value<string>
  image: Value<string>
  registryCredential?: RegistryCredentialProps
  computeType: Value<string>
  certificate?: Value<string>
}