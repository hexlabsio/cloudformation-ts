import { Value } from '../../../kloudformation/Value';

export function tlsConfigProps(tlsConfigPropsProps: TlsConfigProps): TlsConfigProps { return (tlsConfigPropsProps) as unknown as TlsConfigProps }

export interface TlsConfigProps {
    serverNameToVerify?: Value<string>;
}