import { Value } from '../../../kloudformation/Value';
import { ProviderProps } from './ProviderProps';

export function encryptionConfigProps(encryptionConfigPropsProps: EncryptionConfigProps): EncryptionConfigProps { return (encryptionConfigPropsProps) as unknown as EncryptionConfigProps }

export interface EncryptionConfigProps {
    resources?: Value<Value<string>[]>;
    provider?: ProviderProps;
}