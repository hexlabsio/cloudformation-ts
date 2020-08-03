import { Value } from '../../../kloudformation/Value';

export interface AuthenticateOidcConfigProps {
  authenticationRequestExtraParams?: Value<Value<string>[]>
  authorizationEndpoint: Value<string>
  clientId: Value<string>
  clientSecret: Value<string>
  issuer: Value<string>
  onUnauthenticatedRequest?: Value<string>
  scope?: Value<string>
  sessionCookieName?: Value<string>
  sessionTimeout?: Value<number>
  tokenEndpoint: Value<string>
  userInfoEndpoint: Value<string>
}