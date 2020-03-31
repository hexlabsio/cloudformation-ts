import { Value } from '../../kloudformation/Value';
import { CodeProps } from './githubrepository/CodeProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type GitHubRepositoryAttributes = {  }
export function gitHubRepository(gitHubRepositoryProps: GitHubRepository): GitHubRepository & { attributes: GitHubRepositoryAttributes } { return ({ ...gitHubRepositoryProps, _logicalType: 'AWS::CodeStar::GitHubRepository', attributes: {  } }) }

export interface GitHubRepository extends KloudResource {
    repositoryName: Value<string>;
    repositoryAccessToken: Value<string>;
    repositoryOwner: Value<string>;
    enableIssues?: Value<boolean>;
    isPrivate?: Value<boolean>;
    code?: CodeProps;
    repositoryDescription?: Value<string>;
}