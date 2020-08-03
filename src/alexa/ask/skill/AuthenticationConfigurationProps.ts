import { Value } from '../../../kloudformation/Value';

export interface AuthenticationConfigurationProps {
  refreshToken: Value<string>
  clientSecret: Value<string>
  clientId: Value<string>
}