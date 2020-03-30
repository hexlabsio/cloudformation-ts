import { Value } from '../../../kloudformation/Value';

export function egressProps(egressPropsProps: EgressProps): EgressProps { return (egressPropsProps) as unknown as EgressProps }

export interface EgressProps {
    ipProtocol: Value<string>;
    cidrIp?: Value<string>;
    cidrIpv6?: Value<string>;
    description?: Value<string>;
    destinationPrefixListId?: Value<string>;
    destinationSecurityGroupId?: Value<string>;
    fromPort?: Value<number>;
    toPort?: Value<number>;
}