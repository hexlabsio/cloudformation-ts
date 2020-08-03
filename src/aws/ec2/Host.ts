import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function host(hostProps: Host): Host { return ({ ...hostProps, _logicalType: '' }) }
  
export interface Host extends KloudResource {
  autoPlacement?: Value<string>
  availabilityZone: Value<string>
  hostRecovery?: Value<string>
  instanceType: Value<string>
}