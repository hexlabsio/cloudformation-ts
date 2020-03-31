import { Value } from '../../../kloudformation/Value';

export function s3ReportExportConfigProps(s3ReportExportConfigPropsProps: S3ReportExportConfigProps): S3ReportExportConfigProps { return (s3ReportExportConfigPropsProps) }

export interface S3ReportExportConfigProps {
    bucket: Value<string>;
    path?: Value<string>;
    packaging?: Value<string>;
    encryptionKey?: Value<string>;
    encryptionDisabled?: Value<boolean>;
}