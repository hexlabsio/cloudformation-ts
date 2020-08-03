import { Value } from '../../../kloudformation/Value';

export interface RepublishActionProps {
  qos?: Value<number>
  roleArn: Value<string>
  topic: Value<string>
}