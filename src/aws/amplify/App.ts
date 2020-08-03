import { AutoBranchCreationConfigProps } from './app/AutoBranchCreationConfigProps';
import { Value } from '../../kloudformation/Value';
import { EnvironmentVariableProps } from './app/EnvironmentVariableProps';
import { CustomRuleProps } from './app/CustomRuleProps';
import { BasicAuthConfigProps } from './app/BasicAuthConfigProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type AppAttributes = { AppId: Attribute<string>;Arn: Attribute<string>;DefaultDomain: Attribute<string>;AppName: Attribute<string> }
export function app(appProps: App): App & {attributes: AppAttributes} { return ({ ...appProps, _logicalType: 'AWS::Amplify::App', attributes: { AppId: 'AppId',Arn: 'Arn',DefaultDomain: 'DefaultDomain',AppName: 'AppName' } }) }
   
export interface App extends KloudResource {
  autoBranchCreationConfig?: AutoBranchCreationConfigProps
  oauthToken?: Value<string>
  description?: Value<string>
  enableBranchAutoDeletion?: Value<boolean>
  name: Value<string>
  repository?: Value<string>
  environmentVariables?: EnvironmentVariableProps[]
  accessToken?: Value<string>
  buildSpec?: Value<string>
  customRules?: CustomRuleProps[]
  basicAuthConfig?: BasicAuthConfigProps
  tags?: Tag[]
  iAMServiceRole?: Value<string>
}