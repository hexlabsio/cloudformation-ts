import { Value } from '../../kloudformation/Value';
import { CodeProps } from './gitHubRepository/CodeProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function gitHubRepository(gitHubRepositoryProps: GitHubRepository): GitHubRepository { return ({ ...gitHubRepositoryProps, _logicalType: '' }) }
  
export interface GitHubRepository extends KloudResource {
  enableIssues?: Value<boolean>
  repositoryName: Value<string>
  repositoryAccessToken: Value<string>
  repositoryOwner: Value<string>
  isPrivate?: Value<boolean>
  code?: CodeProps
  repositoryDescription?: Value<string>
}