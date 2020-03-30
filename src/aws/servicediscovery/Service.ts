import { Value } from '../../kloudformation/Value';
import { HealthCheckCustomConfigProps } from './service/HealthCheckCustomConfigProps';
import { DnsConfigProps } from './service/DnsConfigProps';
import { HealthCheckConfigProps } from './service/HealthCheckConfigProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function service(serviceProps: Service & { logicalName?: string }): Service { return ({ ...serviceProps, _logicalType: 'AWS::ServiceDiscovery::Service' }) as unknown as Service }

export interface Service extends KloudResource {
    description?: Value<string>;
    healthCheckCustomConfig?: HealthCheckCustomConfigProps;
    dnsConfig?: DnsConfigProps;
    namespaceId?: Value<string>;
    healthCheckConfig?: HealthCheckConfigProps;
    name?: Value<string>;
}