import { Value } from '../../kloudformation/Value';
import { EnvironmentVariableProps } from './branch/EnvironmentVariableProps';
import { BasicAuthConfigProps } from './branch/BasicAuthConfigProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function branch(branchProps: Branch & { logicalName?: string }): Branch { return ({ ...branchProps, _logicalType: 'AWS::Amplify::Branch' }) as unknown as Branch }

export interface Branch extends KloudResource {
    appId: Value<string>;
    branchName: Value<string>;
    description?: Value<string>;
    environmentVariables?: EnvironmentVariableProps[];
    pullRequestEnvironmentName?: Value<string>;
    enablePullRequestPreview?: Value<boolean>;
    enableAutoBuild?: Value<boolean>;
    buildSpec?: Value<string>;
    stage?: Value<string>;
    basicAuthConfig?: BasicAuthConfigProps;
    tags?: Tag[];
}