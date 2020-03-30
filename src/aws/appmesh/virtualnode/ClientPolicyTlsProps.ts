import { TlsValidationContextProps } from './TlsValidationContextProps';
import { Value } from '../../../kloudformation/Value';

export function clientPolicyTlsProps(clientPolicyTlsPropsProps: ClientPolicyTlsProps): ClientPolicyTlsProps { return (clientPolicyTlsPropsProps) as unknown as ClientPolicyTlsProps }

export interface ClientPolicyTlsProps {
    validation: TlsValidationContextProps;
    enforce?: Value<boolean>;
    ports?: Value<Value<number>[]>;
}