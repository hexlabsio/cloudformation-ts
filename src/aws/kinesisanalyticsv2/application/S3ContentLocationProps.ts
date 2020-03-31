import { Value } from '../../../kloudformation/Value';

export function s3ContentLocationProps(s3ContentLocationPropsProps: S3ContentLocationProps): S3ContentLocationProps { return (s3ContentLocationPropsProps) }

export interface S3ContentLocationProps {
    bucketARN?: Value<string>;
    fileKey?: Value<string>;
    objectVersion?: Value<string>;
}