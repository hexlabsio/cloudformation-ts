import { Value } from '../../../kloudformation/Value';

export interface LogConfigProps {
  cloudWatchLogsRoleArn?: Value<string>
  excludeVerboseContent?: Value<boolean>
  fieldLogLevel?: Value<string>
}