import { Value } from '../../../kloudformation/Value';

export function pushSyncProps(pushSyncPropsProps: PushSyncProps): PushSyncProps { return (pushSyncPropsProps) as unknown as PushSyncProps }

export interface PushSyncProps {
    applicationArns?: Value<Value<string>[]>;
    roleArn?: Value<string>;
}