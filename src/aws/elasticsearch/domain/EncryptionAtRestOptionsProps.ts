import { Value } from '../../../kloudformation/Value';

export function encryptionAtRestOptionsProps(encryptionAtRestOptionsPropsProps: EncryptionAtRestOptionsProps): EncryptionAtRestOptionsProps { return (encryptionAtRestOptionsPropsProps) as unknown as EncryptionAtRestOptionsProps }

export interface EncryptionAtRestOptionsProps {
    enabled?: Value<boolean>;
    kmsKeyId?: Value<string>;
}