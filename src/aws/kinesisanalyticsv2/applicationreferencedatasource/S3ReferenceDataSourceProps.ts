import { Value } from '../../../kloudformation/Value';

export function s3ReferenceDataSourceProps(s3ReferenceDataSourcePropsProps: S3ReferenceDataSourceProps): S3ReferenceDataSourceProps { return (s3ReferenceDataSourcePropsProps) as unknown as S3ReferenceDataSourceProps }

export interface S3ReferenceDataSourceProps {
    bucketARN: Value<string>;
    fileKey: Value<string>;
}