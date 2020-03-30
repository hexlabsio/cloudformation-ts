import { Value } from '../../../kloudformation/Value';

export function bounceActionProps(bounceActionPropsProps: BounceActionProps): BounceActionProps { return (bounceActionPropsProps) as unknown as BounceActionProps }

export interface BounceActionProps {
    sender: Value<string>;
    smtpReplyCode: Value<string>;
    message: Value<string>;
    topicArn?: Value<string>;
    statusCode?: Value<string>;
}