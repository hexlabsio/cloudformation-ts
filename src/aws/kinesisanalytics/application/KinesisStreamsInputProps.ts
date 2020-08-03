import { Value } from '../../../kloudformation/Value';

export interface KinesisStreamsInputProps {
  resourceARN: Value<string>
  roleARN: Value<string>
}