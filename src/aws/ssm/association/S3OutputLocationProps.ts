import { Value } from '../../../kloudformation/Value';

export function s3OutputLocationProps(s3OutputLocationPropsProps: S3OutputLocationProps): S3OutputLocationProps { return (s3OutputLocationPropsProps) }

export interface S3OutputLocationProps {
    outputS3BucketName?: Value<string>;
    outputS3KeyPrefix?: Value<string>;
}