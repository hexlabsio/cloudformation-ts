import { Value } from '../../../kloudformation/Value';

export function domainJoinInfoProps(domainJoinInfoPropsProps: DomainJoinInfoProps): DomainJoinInfoProps { return (domainJoinInfoPropsProps) as unknown as DomainJoinInfoProps }

export interface DomainJoinInfoProps {
    organizationalUnitDistinguishedName?: Value<string>;
    directoryName?: Value<string>;
}