import { KMSEncryptionConfigProps } from './KMSEncryptionConfigProps';
import { Value } from '../../../kloudformation/Value';

export function encryptionConfigurationProps(encryptionConfigurationPropsProps: EncryptionConfigurationProps): EncryptionConfigurationProps { return (encryptionConfigurationPropsProps) as unknown as EncryptionConfigurationProps }

export interface EncryptionConfigurationProps {
    kMSEncryptionConfig?: KMSEncryptionConfigProps;
    noEncryptionConfig?: Value<string>;
}