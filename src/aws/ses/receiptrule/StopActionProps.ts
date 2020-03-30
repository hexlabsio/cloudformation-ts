import { Value } from '../../../kloudformation/Value';

export function stopActionProps(stopActionPropsProps: StopActionProps): StopActionProps { return (stopActionPropsProps) as unknown as StopActionProps }

export interface StopActionProps {
    scope: Value<string>;
    topicArn?: Value<string>;
}