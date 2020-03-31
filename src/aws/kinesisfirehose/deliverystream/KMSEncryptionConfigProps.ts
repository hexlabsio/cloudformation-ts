import { Value } from '../../../kloudformation/Value';

export function kMSEncryptionConfigProps(kMSEncryptionConfigPropsProps: KMSEncryptionConfigProps): KMSEncryptionConfigProps { return (kMSEncryptionConfigPropsProps) }

export interface KMSEncryptionConfigProps {
    aWSKMSKeyARN: Value<string>;
}