import { Value } from '../../../kloudformation/Value';

export function workmailActionProps(workmailActionPropsProps: WorkmailActionProps): WorkmailActionProps { return (workmailActionPropsProps) }

export interface WorkmailActionProps {
    organizationArn: Value<string>;
    topicArn?: Value<string>;
}