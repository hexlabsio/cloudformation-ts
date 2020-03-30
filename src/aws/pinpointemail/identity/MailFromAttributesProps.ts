import { Value } from '../../../kloudformation/Value';

export function mailFromAttributesProps(mailFromAttributesPropsProps: MailFromAttributesProps): MailFromAttributesProps { return (mailFromAttributesPropsProps) as unknown as MailFromAttributesProps }

export interface MailFromAttributesProps {
    mailFromDomain?: Value<string>;
    behaviorOnMxFailure?: Value<string>;
}