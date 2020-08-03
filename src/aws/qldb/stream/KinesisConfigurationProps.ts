import { Value } from '../../../kloudformation/Value';

export interface KinesisConfigurationProps {
  streamArn?: Value<string>
  aggregationEnabled?: Value<boolean>
}