import { EncryptionConfigurationProps } from './securityconfiguration/EncryptionConfigurationProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type SecurityConfigurationAttributes = {  }
export function securityConfiguration(securityConfigurationProps: SecurityConfiguration): SecurityConfiguration & { attributes: SecurityConfigurationAttributes } { return ({ ...securityConfigurationProps, _logicalType: 'AWS::Glue::SecurityConfiguration', attributes: {  } }) }

export interface SecurityConfiguration extends KloudResource {
    encryptionConfiguration: EncryptionConfigurationProps;
    name: Value<string>;
}