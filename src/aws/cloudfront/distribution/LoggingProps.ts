import { Value } from '../../../kloudformation/Value';

export interface LoggingProps {
  includeCookies?: Value<boolean>
  bucket: Value<string>
  prefix?: Value<string>
}