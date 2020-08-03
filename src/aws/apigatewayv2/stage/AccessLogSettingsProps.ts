import { Value } from '../../../kloudformation/Value';

export interface AccessLogSettingsProps {
  format?: Value<string>
  destinationArn?: Value<string>
}