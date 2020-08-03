import { Value } from '../../../kloudformation/Value';

export interface FixedResponseConfigProps {
  contentType?: Value<string>
  messageBody?: Value<string>
  statusCode: Value<string>
}