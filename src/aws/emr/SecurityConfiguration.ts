import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type SecurityConfigurationAttributes = {  }
export function securityConfiguration(securityConfigurationProps: SecurityConfiguration): SecurityConfiguration & { attributes: SecurityConfigurationAttributes } { return ({ ...securityConfigurationProps, _logicalType: 'AWS::EMR::SecurityConfiguration', attributes: {  } }) }

export interface SecurityConfiguration extends KloudResource {
    securityConfiguration: Value<any>;
    name?: Value<string>;
}