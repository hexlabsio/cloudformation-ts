import { Value } from '../../../kloudformation/Value';

export interface KinesisSettingsProps {
  messageFormat?: Value<string>
  streamArn?: Value<string>
  serviceAccessRoleArn?: Value<string>
}