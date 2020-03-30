import { Value } from '../../../kloudformation/Value';

export function jobBookmarksEncryptionProps(jobBookmarksEncryptionPropsProps: JobBookmarksEncryptionProps): JobBookmarksEncryptionProps { return (jobBookmarksEncryptionPropsProps) as unknown as JobBookmarksEncryptionProps }

export interface JobBookmarksEncryptionProps {
    kmsKeyArn?: Value<string>;
    jobBookmarksEncryptionMode?: Value<string>;
}