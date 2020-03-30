import { ReferenceSchemaProps } from '../../kinesisanalytics/applicationreferencedatasource/ReferenceSchemaProps';
import { Value } from '../../../kloudformation/Value';
import { S3ReferenceDataSourceProps } from '../../kinesisanalytics/applicationreferencedatasource/S3ReferenceDataSourceProps';

export function referenceDataSourceProps(referenceDataSourcePropsProps: ReferenceDataSourceProps): ReferenceDataSourceProps { return (referenceDataSourcePropsProps) as unknown as ReferenceDataSourceProps }

export interface ReferenceDataSourceProps {
    referenceSchema: ReferenceSchemaProps;
    tableName?: Value<string>;
    s3ReferenceDataSource?: S3ReferenceDataSourceProps;
}