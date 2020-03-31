import { Value } from '../../../kloudformation/Value';

export function sNSActionProps(sNSActionPropsProps: SNSActionProps): SNSActionProps { return (sNSActionPropsProps) }

export interface SNSActionProps {
    topicArn?: Value<string>;
    encoding?: Value<string>;
}