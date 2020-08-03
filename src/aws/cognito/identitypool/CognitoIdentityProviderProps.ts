import { Value } from '../../../kloudformation/Value';

export interface CognitoIdentityProviderProps {
  serverSideTokenCheck?: Value<boolean>
  providerName?: Value<string>
  clientId?: Value<string>
}