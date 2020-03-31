import { Value } from '../../../kloudformation/Value';
import { S3ReportExportConfigProps } from './S3ReportExportConfigProps';

export function reportExportConfigProps(reportExportConfigPropsProps: ReportExportConfigProps): ReportExportConfigProps { return (reportExportConfigPropsProps) }

export interface ReportExportConfigProps {
    exportConfigType: Value<string>;
    s3Destination?: S3ReportExportConfigProps;
}