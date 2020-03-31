import { Value } from '../../../kloudformation/Value';

export function bounceActionProps(bounceActionPropsProps: BounceActionProps): BounceActionProps { return (bounceActionPropsProps) }

export interface BounceActionProps {
    sender: Value<string>;
    smtpReplyCode: Value<string>;
    message: Value<string>;
    topicArn?: Value<string>;
    statusCode?: Value<string>;
}