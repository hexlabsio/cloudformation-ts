import { Value } from '../../../kloudformation/Value';

export interface GitHubLocationProps {
  commitId: Value<string>
  repository: Value<string>
}