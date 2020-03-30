import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function securityConfiguration(securityConfigurationProps: SecurityConfiguration & { logicalName?: string }): SecurityConfiguration { return ({ ...securityConfigurationProps, _logicalType: 'AWS::EMR::SecurityConfiguration' }) as unknown as SecurityConfiguration }

export interface SecurityConfiguration extends KloudResource {
    securityConfiguration: Value<any>;
    name?: Value<string>;
}