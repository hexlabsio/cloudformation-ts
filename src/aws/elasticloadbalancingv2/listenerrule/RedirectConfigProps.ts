import { Value } from '../../../kloudformation/Value';

export interface RedirectConfigProps {
  host?: Value<string>
  path?: Value<string>
  port?: Value<string>
  protocol?: Value<string>
  query?: Value<string>
  statusCode: Value<string>
}