import { Value } from '../../../kloudformation/Value';

export function kerberosAttributesProps(kerberosAttributesPropsProps: KerberosAttributesProps): KerberosAttributesProps { return (kerberosAttributesPropsProps) }

export interface KerberosAttributesProps {
    kdcAdminPassword: Value<string>;
    realm: Value<string>;
    aDDomainJoinPassword?: Value<string>;
    aDDomainJoinUser?: Value<string>;
    crossRealmTrustPrincipalPassword?: Value<string>;
}