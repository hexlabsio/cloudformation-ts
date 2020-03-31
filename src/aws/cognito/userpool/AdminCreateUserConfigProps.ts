import { InviteMessageTemplateProps } from './InviteMessageTemplateProps';
import { Value } from '../../../kloudformation/Value';

export function adminCreateUserConfigProps(adminCreateUserConfigPropsProps: AdminCreateUserConfigProps): AdminCreateUserConfigProps { return (adminCreateUserConfigPropsProps) }

export interface AdminCreateUserConfigProps {
    inviteMessageTemplate?: InviteMessageTemplateProps;
    unusedAccountValidityDays?: Value<number>;
    allowAdminCreateUserOnly?: Value<boolean>;
}