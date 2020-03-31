import { Value } from '../../../kloudformation/Value';

export function tlsProps(tlsPropsProps: TlsProps): TlsProps { return (tlsPropsProps) }

export interface TlsProps {
    certificateAuthorityArnList?: Value<Value<string>[]>;
}