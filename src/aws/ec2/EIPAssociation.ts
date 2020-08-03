import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function eIPAssociation(eIPAssociationProps: EIPAssociation): EIPAssociation { return ({ ...eIPAssociationProps, _logicalType: '' }) }
  
export interface EIPAssociation extends KloudResource {
  allocationId?: Value<string>
  eIP?: Value<string>
  instanceId?: Value<string>
  networkInterfaceId?: Value<string>
  privateIpAddress?: Value<string>
}