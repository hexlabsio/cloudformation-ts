import { Value } from '../../../kloudformation/Value';

export interface KinesisStreamSourceConfigurationProps {
  kinesisStreamARN: Value<string>
  roleARN: Value<string>
}