import { Value } from '../../../kloudformation/Value';

export interface SqsActionProps {
  queueUrl: Value<string>
  roleArn: Value<string>
  useBase64?: Value<boolean>
}