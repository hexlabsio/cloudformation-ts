import { Value } from '../../../kloudformation/Value';

export function repositoryCredentialsProps(repositoryCredentialsPropsProps: RepositoryCredentialsProps): RepositoryCredentialsProps { return (repositoryCredentialsPropsProps) }

export interface RepositoryCredentialsProps {
    credentialsParameter?: Value<string>;
}