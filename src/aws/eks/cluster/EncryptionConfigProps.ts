import { Value } from '../../../kloudformation/Value';
import { ProviderProps } from './ProviderProps';

export function encryptionConfigProps(encryptionConfigPropsProps: EncryptionConfigProps): EncryptionConfigProps { return (encryptionConfigPropsProps) }

export interface EncryptionConfigProps {
    resources?: Value<Value<string>[]>;
    provider?: ProviderProps;
}