import { ServerSideEncryptionRuleProps } from './ServerSideEncryptionRuleProps';

export function bucketEncryptionProps(bucketEncryptionPropsProps: BucketEncryptionProps): BucketEncryptionProps { return (bucketEncryptionPropsProps) }

export interface BucketEncryptionProps {
    serverSideEncryptionConfiguration: ServerSideEncryptionRuleProps[];
}