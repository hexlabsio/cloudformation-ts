import { Value } from '../../../kloudformation/Value';

export interface LogPublishingOptionProps {
  cloudWatchLogsLogGroupArn?: Value<string>
  enabled?: Value<boolean>
}