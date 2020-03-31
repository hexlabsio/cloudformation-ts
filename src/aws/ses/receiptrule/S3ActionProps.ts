import { Value } from '../../../kloudformation/Value';

export function s3ActionProps(s3ActionPropsProps: S3ActionProps): S3ActionProps { return (s3ActionPropsProps) }

export interface S3ActionProps {
    bucketName: Value<string>;
    kmsKeyArn?: Value<string>;
    topicArn?: Value<string>;
    objectKeyPrefix?: Value<string>;
}