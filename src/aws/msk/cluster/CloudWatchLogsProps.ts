import { Value } from '../../../kloudformation/Value';

export interface CloudWatchLogsProps {
  logGroup?: Value<string>
  enabled: Value<boolean>
}