import { Value } from '../../../kloudformation/Value';

export function gitSubmodulesConfigProps(gitSubmodulesConfigPropsProps: GitSubmodulesConfigProps): GitSubmodulesConfigProps { return (gitSubmodulesConfigPropsProps) as unknown as GitSubmodulesConfigProps }

export interface GitSubmodulesConfigProps {
    fetchSubmodules: Value<boolean>;
}