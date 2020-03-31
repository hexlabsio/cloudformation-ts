import { Value } from '../../../kloudformation/Value';

export function encryptionAtRestOptionsProps(encryptionAtRestOptionsPropsProps: EncryptionAtRestOptionsProps): EncryptionAtRestOptionsProps { return (encryptionAtRestOptionsPropsProps) }

export interface EncryptionAtRestOptionsProps {
    enabled?: Value<boolean>;
    kmsKeyId?: Value<string>;
}