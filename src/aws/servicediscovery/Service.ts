import { Value } from '../../kloudformation/Value';
import { HealthCheckCustomConfigProps } from './service/HealthCheckCustomConfigProps';
import { DnsConfigProps } from './service/DnsConfigProps';
import { HealthCheckConfigProps } from './service/HealthCheckConfigProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ServiceAttributes = { Id: Attribute<string>;Arn: Attribute<string>;Name: Attribute<string> }
export function service(serviceProps: Service): Service & {attributes: ServiceAttributes} { return ({ ...serviceProps, _logicalType: 'AWS::ServiceDiscovery::Service', attributes: { Id: 'Id',Arn: 'Arn',Name: 'Name' } }) }
   
export interface Service extends KloudResource {
  description?: Value<string>
  healthCheckCustomConfig?: HealthCheckCustomConfigProps
  dnsConfig?: DnsConfigProps
  namespaceId?: Value<string>
  healthCheckConfig?: HealthCheckConfigProps
  tags?: Tag[]
  name?: Value<string>
}