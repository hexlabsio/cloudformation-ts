import { Value } from '../../../kloudformation/Value';

export interface SnsActionProps {
  messageFormat?: Value<string>
  roleArn: Value<string>
  targetArn: Value<string>
}