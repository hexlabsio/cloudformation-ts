import { Value } from '../../../kloudformation/Value';

export interface S3ReportExportConfigProps {
  path?: Value<string>
  bucket: Value<string>
  packaging?: Value<string>
  encryptionKey?: Value<string>
  encryptionDisabled?: Value<boolean>
}