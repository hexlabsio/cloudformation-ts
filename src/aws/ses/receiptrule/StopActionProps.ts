import { Value } from '../../../kloudformation/Value';

export function stopActionProps(stopActionPropsProps: StopActionProps): StopActionProps { return (stopActionPropsProps) }

export interface StopActionProps {
    scope: Value<string>;
    topicArn?: Value<string>;
}