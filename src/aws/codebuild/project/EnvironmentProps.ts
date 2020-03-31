import { Value } from '../../../kloudformation/Value';
import { EnvironmentVariableProps } from './EnvironmentVariableProps';
import { RegistryCredentialProps } from './RegistryCredentialProps';

export function environmentProps(environmentPropsProps: EnvironmentProps): EnvironmentProps { return (environmentPropsProps) }

export interface EnvironmentProps {
    type: Value<string>;
    image: Value<string>;
    computeType: Value<string>;
    environmentVariables?: EnvironmentVariableProps[];
    privilegedMode?: Value<boolean>;
    imagePullCredentialsType?: Value<string>;
    registryCredential?: RegistryCredentialProps;
    certificate?: Value<string>;
}