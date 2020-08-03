import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function vPCDHCPOptionsAssociation(vPCDHCPOptionsAssociationProps: VPCDHCPOptionsAssociation): VPCDHCPOptionsAssociation { return ({ ...vPCDHCPOptionsAssociationProps, _logicalType: '' }) }
  
export interface VPCDHCPOptionsAssociation extends KloudResource {
  dhcpOptionsId: Value<string>
  vpcId: Value<string>
}