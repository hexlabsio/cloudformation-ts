import { Value } from '../../../kloudformation/Value';

export function repositoryProps(repositoryPropsProps: RepositoryProps): RepositoryProps { return (repositoryPropsProps) }

export interface RepositoryProps {
    pathComponent: Value<string>;
    repositoryUrl: Value<string>;
}