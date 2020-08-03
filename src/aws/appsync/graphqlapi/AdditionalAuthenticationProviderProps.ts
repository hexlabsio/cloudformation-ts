import { OpenIDConnectConfigProps } from './OpenIDConnectConfigProps';
import { CognitoUserPoolConfigProps } from './CognitoUserPoolConfigProps';
import { Value } from '../../../kloudformation/Value';

export interface AdditionalAuthenticationProviderProps {
  openIDConnectConfig?: OpenIDConnectConfigProps
  userPoolConfig?: CognitoUserPoolConfigProps
  authenticationType: Value<string>
}