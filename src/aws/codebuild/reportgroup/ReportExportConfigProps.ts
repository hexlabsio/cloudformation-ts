import { S3ReportExportConfigProps } from './S3ReportExportConfigProps';
import { Value } from '../../../kloudformation/Value';

export interface ReportExportConfigProps {
  s3Destination?: S3ReportExportConfigProps
  exportConfigType: Value<string>
}