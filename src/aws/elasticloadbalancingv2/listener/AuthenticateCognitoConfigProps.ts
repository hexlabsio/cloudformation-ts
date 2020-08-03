import { Value } from '../../../kloudformation/Value';

export interface AuthenticateCognitoConfigProps {
  authenticationRequestExtraParams?: Value<Value<string>[]>
  onUnauthenticatedRequest?: Value<string>
  scope?: Value<string>
  sessionCookieName?: Value<string>
  sessionTimeout?: Value<number>
  userPoolArn: Value<string>
  userPoolClientId: Value<string>
  userPoolDomain: Value<string>
}