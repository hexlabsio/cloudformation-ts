import { AnalyticsConfigurationProps } from './userPoolClient/AnalyticsConfigurationProps';
import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type UserPoolClientAttributes = { ClientSecret: Attribute<string>;Name: Attribute<string> }
export function userPoolClient(userPoolClientProps: UserPoolClient): UserPoolClient & {attributes: UserPoolClientAttributes} { return ({ ...userPoolClientProps, _logicalType: 'AWS::Cognito::UserPoolClient', attributes: { ClientSecret: 'ClientSecret',Name: 'Name' } }) }
   
export interface UserPoolClient extends KloudResource {
  analyticsConfiguration?: AnalyticsConfigurationProps
  generateSecret?: Value<boolean>
  callbackURLs?: Value<Value<string>[]>
  allowedOAuthScopes?: Value<Value<string>[]>
  readAttributes?: Value<Value<string>[]>
  allowedOAuthFlowsUserPoolClient?: Value<boolean>
  defaultRedirectURI?: Value<string>
  supportedIdentityProviders?: Value<Value<string>[]>
  clientName?: Value<string>
  userPoolId: Value<string>
  allowedOAuthFlows?: Value<Value<string>[]>
  explicitAuthFlows?: Value<Value<string>[]>
  logoutURLs?: Value<Value<string>[]>
  refreshTokenValidity?: Value<number>
  writeAttributes?: Value<Value<string>[]>
  preventUserExistenceErrors?: Value<string>
}