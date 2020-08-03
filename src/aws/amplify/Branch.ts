import { Value } from '../../kloudformation/Value';
import { EnvironmentVariableProps } from './branch/EnvironmentVariableProps';
import { BasicAuthConfigProps } from './branch/BasicAuthConfigProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type BranchAttributes = { BranchName: Attribute<string>;Arn: Attribute<string> }
export function branch(branchProps: Branch): Branch & {attributes: BranchAttributes} { return ({ ...branchProps, _logicalType: 'AWS::Amplify::Branch', attributes: { BranchName: 'BranchName',Arn: 'Arn' } }) }
   
export interface Branch extends KloudResource {
  description?: Value<string>
  environmentVariables?: EnvironmentVariableProps[]
  appId: Value<string>
  pullRequestEnvironmentName?: Value<string>
  enablePullRequestPreview?: Value<boolean>
  enableAutoBuild?: Value<boolean>
  buildSpec?: Value<string>
  stage?: Value<string>
  branchName: Value<string>
  basicAuthConfig?: BasicAuthConfigProps
  tags?: Tag[]
}