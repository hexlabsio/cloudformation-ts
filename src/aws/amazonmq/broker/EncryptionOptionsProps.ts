import { Value } from '../../../kloudformation/Value';

export function encryptionOptionsProps(encryptionOptionsPropsProps: EncryptionOptionsProps): EncryptionOptionsProps { return (encryptionOptionsPropsProps) }

export interface EncryptionOptionsProps {
    useAwsOwnedKey: Value<boolean>;
    kmsKeyId?: Value<string>;
}