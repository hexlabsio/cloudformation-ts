import { Value } from '../../../kloudformation/Value';

export interface CloudWatchLoggingOptionsProps {
  enabled?: Value<boolean>
  logGroupName?: Value<string>
  logStreamName?: Value<string>
}