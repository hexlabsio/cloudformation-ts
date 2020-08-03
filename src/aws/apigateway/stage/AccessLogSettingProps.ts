import { Value } from '../../../kloudformation/Value';

export interface AccessLogSettingProps {
  destinationArn?: Value<string>
  format?: Value<string>
}