import { Value } from '../../../kloudformation/Value';

export function kMSEncryptionConfigProps(kMSEncryptionConfigPropsProps: KMSEncryptionConfigProps): KMSEncryptionConfigProps { return (kMSEncryptionConfigPropsProps) as unknown as KMSEncryptionConfigProps }

export interface KMSEncryptionConfigProps {
    aWSKMSKeyARN: Value<string>;
}