import { Value } from '../../../kloudformation/Value';

export function tlsConfigProps(tlsConfigPropsProps: TlsConfigProps): TlsConfigProps { return (tlsConfigPropsProps) }

export interface TlsConfigProps {
    serverNameToVerify?: Value<string>;
}