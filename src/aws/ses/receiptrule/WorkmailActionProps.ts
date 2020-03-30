import { Value } from '../../../kloudformation/Value';

export function workmailActionProps(workmailActionPropsProps: WorkmailActionProps): WorkmailActionProps { return (workmailActionPropsProps) as unknown as WorkmailActionProps }

export interface WorkmailActionProps {
    organizationArn: Value<string>;
    topicArn?: Value<string>;
}