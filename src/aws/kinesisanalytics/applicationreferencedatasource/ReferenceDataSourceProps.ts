import { ReferenceSchemaProps } from './ReferenceSchemaProps';
import { Value } from '../../../kloudformation/Value';
import { S3ReferenceDataSourceProps } from './S3ReferenceDataSourceProps';

export function referenceDataSourceProps(referenceDataSourcePropsProps: ReferenceDataSourceProps): ReferenceDataSourceProps { return (referenceDataSourcePropsProps) }

export interface ReferenceDataSourceProps {
    referenceSchema: ReferenceSchemaProps;
    tableName?: Value<string>;
    s3ReferenceDataSource?: S3ReferenceDataSourceProps;
}