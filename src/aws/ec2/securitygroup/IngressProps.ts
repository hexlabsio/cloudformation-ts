import { Value } from '../../../kloudformation/Value';

export function ingressProps(ingressPropsProps: IngressProps): IngressProps { return (ingressPropsProps) }

export interface IngressProps {
    ipProtocol: Value<string>;
    cidrIp?: Value<string>;
    cidrIpv6?: Value<string>;
    description?: Value<string>;
    fromPort?: Value<number>;
    sourcePrefixListId?: Value<string>;
    sourceSecurityGroupId?: Value<string>;
    sourceSecurityGroupName?: Value<string>;
    sourceSecurityGroupOwnerId?: Value<string>;
    toPort?: Value<number>;
}