import { Value } from '../../kloudformation/Value';
import { EnvironmentVariableProps } from './branch/EnvironmentVariableProps';
import { BasicAuthConfigProps } from './branch/BasicAuthConfigProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type BranchAttributes = { BranchName: Attribute<string>; Arn: Attribute<string> }
export function branch(branchProps: Branch): Branch & { attributes: BranchAttributes } { return ({ ...branchProps, _logicalType: 'AWS::Amplify::Branch', attributes: { BranchName: 'BranchName', Arn: 'Arn' } }) }

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