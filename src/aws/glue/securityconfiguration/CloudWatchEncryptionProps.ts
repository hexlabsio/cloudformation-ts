import { Value } from '../../../kloudformation/Value';

export interface CloudWatchEncryptionProps {
  kmsKeyArn?: Value<string>
  cloudWatchEncryptionMode?: Value<string>
}