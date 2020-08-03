import { Value } from '../../../kloudformation/Value';

export interface AuthFormatProps {
  authScheme?: Value<string>
  description?: Value<string>
  iAMAuth?: Value<string>
  secretArn?: Value<string>
  userName?: Value<string>
}