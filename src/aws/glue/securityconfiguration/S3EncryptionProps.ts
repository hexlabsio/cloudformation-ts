import { Value } from '../../../kloudformation/Value';

export function s3EncryptionProps(s3EncryptionPropsProps: S3EncryptionProps): S3EncryptionProps { return (s3EncryptionPropsProps) as unknown as S3EncryptionProps }

export interface S3EncryptionProps {
    kmsKeyArn?: Value<string>;
    s3EncryptionMode?: Value<string>;
}