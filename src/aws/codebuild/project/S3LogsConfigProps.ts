import { Value } from '../../../kloudformation/Value';

export interface S3LogsConfigProps {
  status: Value<string>
  encryptionDisabled?: Value<boolean>
  location?: Value<string>
}