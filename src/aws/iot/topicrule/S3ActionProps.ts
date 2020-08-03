import { Value } from '../../../kloudformation/Value';

export interface S3ActionProps {
  bucketName: Value<string>
  key: Value<string>
  roleArn: Value<string>
}