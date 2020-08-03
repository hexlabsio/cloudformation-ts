import { InviteMessageTemplateProps } from './InviteMessageTemplateProps';
import { Value } from '../../../kloudformation/Value';

export interface AdminCreateUserConfigProps {
  inviteMessageTemplate?: InviteMessageTemplateProps
  unusedAccountValidityDays?: Value<number>
  allowAdminCreateUserOnly?: Value<boolean>
}