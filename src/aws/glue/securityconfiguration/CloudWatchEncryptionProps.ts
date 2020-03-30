import { Value } from '../../../kloudformation/Value';

export function cloudWatchEncryptionProps(cloudWatchEncryptionPropsProps: CloudWatchEncryptionProps): CloudWatchEncryptionProps { return (cloudWatchEncryptionPropsProps) as unknown as CloudWatchEncryptionProps }

export interface CloudWatchEncryptionProps {
    kmsKeyArn?: Value<string>;
    cloudWatchEncryptionMode?: Value<string>;
}