import { Value } from '../../../kloudformation/Value';

export function mailFromAttributesProps(mailFromAttributesPropsProps: MailFromAttributesProps): MailFromAttributesProps { return (mailFromAttributesPropsProps) }

export interface MailFromAttributesProps {
    mailFromDomain?: Value<string>;
    behaviorOnMxFailure?: Value<string>;
}