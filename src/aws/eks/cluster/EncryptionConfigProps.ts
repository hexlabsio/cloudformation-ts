import { Value } from '../../../kloudformation/Value';
import { ProviderProps } from './ProviderProps';

export interface EncryptionConfigProps {
  resources?: Value<Value<string>[]>
  provider?: ProviderProps
}