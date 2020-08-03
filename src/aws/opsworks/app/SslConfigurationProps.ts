import { Value } from '../../../kloudformation/Value';

export interface SslConfigurationProps {
  certificate?: Value<string>
  chain?: Value<string>
  privateKey?: Value<string>
}