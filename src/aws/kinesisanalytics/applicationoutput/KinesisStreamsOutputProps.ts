import { Value } from '../../../kloudformation/Value';

export interface KinesisStreamsOutputProps {
  resourceARN: Value<string>
  roleARN: Value<string>
}