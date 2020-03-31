import { Value } from '../../../kloudformation/Value';

export function pushSyncProps(pushSyncPropsProps: PushSyncProps): PushSyncProps { return (pushSyncPropsProps) }

export interface PushSyncProps {
    applicationArns?: Value<Value<string>[]>;
    roleArn?: Value<string>;
}