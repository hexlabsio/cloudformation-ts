import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function instance(instanceProps: Instance): Instance { return ({ ...instanceProps, _logicalType: '' }) }
  
export interface Instance extends KloudResource {
  instanceAttributes: Value<any>
  instanceId?: Value<string>
  serviceId: Value<string>
}