import { Value } from '../../../kloudformation/Value';

export interface FirehoseActionProps {
  deliveryStreamName: Value<string>
  roleArn: Value<string>
  separator?: Value<string>
}