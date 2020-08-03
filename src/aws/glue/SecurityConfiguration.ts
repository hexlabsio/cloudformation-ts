import { EncryptionConfigurationProps } from './securityConfiguration/EncryptionConfigurationProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function securityConfiguration(securityConfigurationProps: SecurityConfiguration): SecurityConfiguration { return ({ ...securityConfigurationProps, _logicalType: '' }) }
  
export interface SecurityConfiguration extends KloudResource {
  encryptionConfiguration: EncryptionConfigurationProps
  name: Value<string>
}