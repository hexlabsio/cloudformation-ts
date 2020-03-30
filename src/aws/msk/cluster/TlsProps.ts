import { Value } from '../../../kloudformation/Value';

export function tlsProps(tlsPropsProps: TlsProps): TlsProps { return (tlsPropsProps) as unknown as TlsProps }

export interface TlsProps {
    certificateAuthorityArnList?: Value<Value<string>[]>;
}