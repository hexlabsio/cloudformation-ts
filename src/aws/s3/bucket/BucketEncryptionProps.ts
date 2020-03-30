import { ServerSideEncryptionRuleProps } from './ServerSideEncryptionRuleProps';

export function bucketEncryptionProps(bucketEncryptionPropsProps: BucketEncryptionProps): BucketEncryptionProps { return (bucketEncryptionPropsProps) as unknown as BucketEncryptionProps }

export interface BucketEncryptionProps {
    serverSideEncryptionConfiguration: ServerSideEncryptionRuleProps[];
}