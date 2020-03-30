import { Value } from '../../../kloudformation/Value';

export function inviteMessageTemplateProps(inviteMessageTemplatePropsProps: InviteMessageTemplateProps): InviteMessageTemplateProps { return (inviteMessageTemplatePropsProps) as unknown as InviteMessageTemplateProps }

export interface InviteMessageTemplateProps {
    emailMessage?: Value<string>;
    sMSMessage?: Value<string>;
    emailSubject?: Value<string>;
}