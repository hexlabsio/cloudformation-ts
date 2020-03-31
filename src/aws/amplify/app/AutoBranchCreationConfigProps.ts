import { EnvironmentVariableProps } from './EnvironmentVariableProps';
import { Value } from '../../../kloudformation/Value';
import { BasicAuthConfigProps } from './BasicAuthConfigProps';

export function autoBranchCreationConfigProps(autoBranchCreationConfigPropsProps: AutoBranchCreationConfigProps): AutoBranchCreationConfigProps { return (autoBranchCreationConfigPropsProps) }

export interface AutoBranchCreationConfigProps {
    environmentVariables?: EnvironmentVariableProps[];
    enableAutoBranchCreation?: Value<boolean>;
    pullRequestEnvironmentName?: Value<string>;
    autoBranchCreationPatterns?: Value<Value<string>[]>;
    enablePullRequestPreview?: Value<boolean>;
    enableAutoBuild?: Value<boolean>;
    buildSpec?: Value<string>;
    stage?: Value<string>;
    basicAuthConfig?: BasicAuthConfigProps;
}