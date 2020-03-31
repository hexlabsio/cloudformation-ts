import { Value } from '../../../kloudformation/Value';

export function verificationMessageTemplateProps(verificationMessageTemplatePropsProps: VerificationMessageTemplateProps): VerificationMessageTemplateProps { return (verificationMessageTemplatePropsProps) }

export interface VerificationMessageTemplateProps {
    emailMessageByLink?: Value<string>;
    emailMessage?: Value<string>;
    smsMessage?: Value<string>;
    emailSubject?: Value<string>;
    defaultEmailOption?: Value<string>;
    emailSubjectByLink?: Value<string>;
}