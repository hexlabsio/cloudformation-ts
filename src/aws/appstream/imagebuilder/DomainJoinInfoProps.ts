import { Value } from '../../../kloudformation/Value';

export function domainJoinInfoProps(domainJoinInfoPropsProps: DomainJoinInfoProps): DomainJoinInfoProps { return (domainJoinInfoPropsProps) }

export interface DomainJoinInfoProps {
    organizationalUnitDistinguishedName?: Value<string>;
    directoryName?: Value<string>;
}