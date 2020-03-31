import { Value } from '../../../kloudformation/Value';

export function gitSubmodulesConfigProps(gitSubmodulesConfigPropsProps: GitSubmodulesConfigProps): GitSubmodulesConfigProps { return (gitSubmodulesConfigPropsProps) }

export interface GitSubmodulesConfigProps {
    fetchSubmodules: Value<boolean>;
}