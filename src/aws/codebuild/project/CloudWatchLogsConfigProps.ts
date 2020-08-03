import { Value } from '../../../kloudformation/Value';

export interface CloudWatchLogsConfigProps {
  status: Value<string>
  groupName?: Value<string>
  streamName?: Value<string>
}