import { Value } from '../../../kloudformation/Value';

export function selfManagedActiveDirectoryConfigurationProps(selfManagedActiveDirectoryConfigurationPropsProps: SelfManagedActiveDirectoryConfigurationProps): SelfManagedActiveDirectoryConfigurationProps { return (selfManagedActiveDirectoryConfigurationPropsProps) as unknown as SelfManagedActiveDirectoryConfigurationProps }

export interface SelfManagedActiveDirectoryConfigurationProps {
    fileSystemAdministratorsGroup?: Value<string>;
    userName?: Value<string>;
    domainName?: Value<string>;
    organizationalUnitDistinguishedName?: Value<string>;
    dnsIps?: Value<Value<string>[]>;
    password?: Value<string>;
}