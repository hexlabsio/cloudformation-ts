import { Value } from '../../../kloudformation/Value';

export function ipv6AddProps(ipv6AddPropsProps: Ipv6AddProps): Ipv6AddProps { return (ipv6AddPropsProps) }

export interface Ipv6AddProps {
    ipv6Address?: Value<string>;
}