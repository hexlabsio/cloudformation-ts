import { Value } from '../../../kloudformation/Value';

export function s3ActionProps(s3ActionPropsProps: S3ActionProps): S3ActionProps { return (s3ActionPropsProps) as unknown as S3ActionProps }

export interface S3ActionProps {
    bucketName: Value<string>;
    key: Value<string>;
    roleArn: Value<string>;
}