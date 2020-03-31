import { Value } from '../../../kloudformation/Value';

export function gitConfigProps(gitConfigPropsProps: GitConfigProps): GitConfigProps { return (gitConfigPropsProps) }

export interface GitConfigProps {
    repositoryUrl: Value<string>;
    secretArn?: Value<string>;
    branch?: Value<string>;
}