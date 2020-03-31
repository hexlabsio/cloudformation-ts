import { Value } from '../../../kloudformation/Value';

export function gitHubLocationProps(gitHubLocationPropsProps: GitHubLocationProps): GitHubLocationProps { return (gitHubLocationPropsProps) }

export interface GitHubLocationProps {
    commitId: Value<string>;
    repository: Value<string>;
}