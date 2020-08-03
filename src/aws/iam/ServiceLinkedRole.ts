import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function serviceLinkedRole(serviceLinkedRoleProps: ServiceLinkedRole): ServiceLinkedRole { return ({ ...serviceLinkedRoleProps, _logicalType: '' }) }
  
export interface ServiceLinkedRole extends KloudResource {
  customSuffix?: Value<string>
  description?: Value<string>
  aWSServiceName: Value<string>
}