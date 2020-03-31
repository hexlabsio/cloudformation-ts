import { Value } from '../../../kloudformation/Value';

export function jobBookmarksEncryptionProps(jobBookmarksEncryptionPropsProps: JobBookmarksEncryptionProps): JobBookmarksEncryptionProps { return (jobBookmarksEncryptionPropsProps) }

export interface JobBookmarksEncryptionProps {
    kmsKeyArn?: Value<string>;
    jobBookmarksEncryptionMode?: Value<string>;
}