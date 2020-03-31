import { Value } from '../../../kloudformation/Value';

export function encryptionAtRestProps(encryptionAtRestPropsProps: EncryptionAtRestProps): EncryptionAtRestProps { return (encryptionAtRestPropsProps) }

export interface EncryptionAtRestProps {
    catalogEncryptionMode?: Value<string>;
    sseAwsKmsKeyId?: Value<string>;
}