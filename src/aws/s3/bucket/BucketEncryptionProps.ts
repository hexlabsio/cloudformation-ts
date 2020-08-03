import { ServerSideEncryptionRuleProps } from './ServerSideEncryptionRuleProps';

export interface BucketEncryptionProps {
  serverSideEncryptionConfiguration: ServerSideEncryptionRuleProps[]
}