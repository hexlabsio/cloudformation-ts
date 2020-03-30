import { Value } from '../../../kloudformation/Value';

export function repositoryCredentialsProps(repositoryCredentialsPropsProps: RepositoryCredentialsProps): RepositoryCredentialsProps { return (repositoryCredentialsPropsProps) as unknown as RepositoryCredentialsProps }

export interface RepositoryCredentialsProps {
    credentialsParameter?: Value<string>;
}