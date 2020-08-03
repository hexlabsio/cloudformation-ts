import { Value } from '../../../kloudformation/Value';

export interface JobBookmarksEncryptionProps {
  kmsKeyArn?: Value<string>
  jobBookmarksEncryptionMode?: Value<string>
}