import { Value } from '../../../kloudformation/Value';

export function encryptionAtRestProps(encryptionAtRestPropsProps: EncryptionAtRestProps): EncryptionAtRestProps { return (encryptionAtRestPropsProps) }

export interface EncryptionAtRestProps {
    dataVolumeKMSKeyId: Value<string>;
}