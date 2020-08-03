import { Value } from '../../../kloudformation/Value';

export interface CustomerManagedS3Props {
  bucket: Value<string>
  roleArn: Value<string>
  keyPrefix?: Value<string>
}