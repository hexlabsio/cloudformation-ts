import { TlsValidationContextProps } from './TlsValidationContextProps';
import { Value } from '../../../kloudformation/Value';

export interface ClientPolicyTlsProps {
  validation: TlsValidationContextProps
  enforce?: Value<boolean>
  ports?: Value<Value<number>[]>
}