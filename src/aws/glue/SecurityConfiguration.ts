import { EncryptionConfigurationProps } from './securityconfiguration/EncryptionConfigurationProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function securityConfiguration(securityConfigurationProps: SecurityConfiguration & { logicalName?: string }): SecurityConfiguration { return ({ ...securityConfigurationProps, _logicalType: 'AWS::Glue::SecurityConfiguration' }) as unknown as SecurityConfiguration }

export interface SecurityConfiguration extends KloudResource {
    encryptionConfiguration: EncryptionConfigurationProps;
    name: Value<string>;
}