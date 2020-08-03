import { Value } from '../../../kloudformation/Value';

export interface PushSyncProps {
  applicationArns?: Value<Value<string>[]>
  roleArn?: Value<string>
}