import { Value } from '../../../kloudformation/Value';

export function encryptionKeyProps(encryptionKeyPropsProps: EncryptionKeyProps): EncryptionKeyProps { return (encryptionKeyPropsProps) as unknown as EncryptionKeyProps }

export interface EncryptionKeyProps {
    id: Value<string>;
    type: Value<string>;
}