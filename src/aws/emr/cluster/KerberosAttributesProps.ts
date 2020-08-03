import { Value } from '../../../kloudformation/Value';

export interface KerberosAttributesProps {
  aDDomainJoinPassword?: Value<string>
  aDDomainJoinUser?: Value<string>
  crossRealmTrustPrincipalPassword?: Value<string>
  kdcAdminPassword: Value<string>
  realm: Value<string>
}