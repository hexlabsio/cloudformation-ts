import { Value } from '../../../kloudformation/Value';

export interface InviteMessageTemplateProps {
  emailMessage?: Value<string>
  sMSMessage?: Value<string>
  emailSubject?: Value<string>
}