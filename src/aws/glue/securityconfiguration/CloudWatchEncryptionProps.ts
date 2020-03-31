import { Value } from '../../../kloudformation/Value';

export function cloudWatchEncryptionProps(cloudWatchEncryptionPropsProps: CloudWatchEncryptionProps): CloudWatchEncryptionProps { return (cloudWatchEncryptionPropsProps) }

export interface CloudWatchEncryptionProps {
    kmsKeyArn?: Value<string>;
    cloudWatchEncryptionMode?: Value<string>;
}