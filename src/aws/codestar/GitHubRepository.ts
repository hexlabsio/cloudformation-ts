import { Value } from '../../kloudformation/Value';
import { CodeProps } from './githubrepository/CodeProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function gitHubRepository(gitHubRepositoryProps: GitHubRepository & { logicalName?: string }): GitHubRepository { return ({ ...gitHubRepositoryProps, _logicalType: 'AWS::CodeStar::GitHubRepository' }) as unknown as GitHubRepository }

export interface GitHubRepository extends KloudResource {
    repositoryName: Value<string>;
    repositoryAccessToken: Value<string>;
    repositoryOwner: Value<string>;
    enableIssues?: Value<boolean>;
    isPrivate?: Value<boolean>;
    code?: CodeProps;
    repositoryDescription?: Value<string>;
}