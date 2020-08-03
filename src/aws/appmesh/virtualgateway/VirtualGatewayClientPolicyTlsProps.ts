import { VirtualGatewayTlsValidationContextProps } from './VirtualGatewayTlsValidationContextProps';
import { Value } from '../../../kloudformation/Value';

export interface VirtualGatewayClientPolicyTlsProps {
  validation: VirtualGatewayTlsValidationContextProps
  enforce?: Value<boolean>
  ports?: Value<Value<number>[]>
}