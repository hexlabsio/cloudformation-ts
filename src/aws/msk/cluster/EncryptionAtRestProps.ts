import { Value } from '../../../kloudformation/Value';

export function encryptionAtRestProps(encryptionAtRestPropsProps: EncryptionAtRestProps): EncryptionAtRestProps { return (encryptionAtRestPropsProps) as unknown as EncryptionAtRestProps }

export interface EncryptionAtRestProps {
    dataVolumeKMSKeyId: Value<string>;
}