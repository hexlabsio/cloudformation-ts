import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function securityConfiguration(securityConfigurationProps: SecurityConfiguration): SecurityConfiguration { return ({ ...securityConfigurationProps, _logicalType: '' }) }
  
export interface SecurityConfiguration extends KloudResource {
  name?: Value<string>
  securityConfiguration: Value<any>
}