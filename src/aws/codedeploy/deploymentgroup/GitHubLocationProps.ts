import { Value } from '../../../kloudformation/Value';

export function gitHubLocationProps(gitHubLocationPropsProps: GitHubLocationProps): GitHubLocationProps { return (gitHubLocationPropsProps) as unknown as GitHubLocationProps }

export interface GitHubLocationProps {
    commitId: Value<string>;
    repository: Value<string>;
}