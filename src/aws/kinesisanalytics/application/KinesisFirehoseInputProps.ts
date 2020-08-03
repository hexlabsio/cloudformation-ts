import { Value } from '../../../kloudformation/Value';

export interface KinesisFirehoseInputProps {
  resourceARN: Value<string>
  roleARN: Value<string>
}