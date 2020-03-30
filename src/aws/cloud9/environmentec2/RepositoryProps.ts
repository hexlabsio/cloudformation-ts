import { Value } from '../../../kloudformation/Value';

export function repositoryProps(repositoryPropsProps: RepositoryProps): RepositoryProps { return (repositoryPropsProps) as unknown as RepositoryProps }

export interface RepositoryProps {
    pathComponent: Value<string>;
    repositoryUrl: Value<string>;
}