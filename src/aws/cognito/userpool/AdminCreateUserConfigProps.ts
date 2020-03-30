import { InviteMessageTemplateProps } from './InviteMessageTemplateProps';
import { Value } from '../../../kloudformation/Value';

export function adminCreateUserConfigProps(adminCreateUserConfigPropsProps: AdminCreateUserConfigProps): AdminCreateUserConfigProps { return (adminCreateUserConfigPropsProps) as unknown as AdminCreateUserConfigProps }

export interface AdminCreateUserConfigProps {
    inviteMessageTemplate?: InviteMessageTemplateProps;
    unusedAccountValidityDays?: Value<number>;
    allowAdminCreateUserOnly?: Value<boolean>;
}