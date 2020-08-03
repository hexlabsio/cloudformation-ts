import { Value } from '../../../kloudformation/Value';

export interface KinesisActionProps {
  partitionKey?: Value<string>
  roleArn: Value<string>
  streamName: Value<string>
}