import { Value } from '../../../kloudformation/Value';

export interface NotifyEmailTypeProps {
  textBody?: Value<string>
  htmlBody?: Value<string>
  subject: Value<string>
}