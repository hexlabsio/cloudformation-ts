import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type VPCDHCPOptionsAssociationAttributes = {  }
export function vPCDHCPOptionsAssociation(vPCDHCPOptionsAssociationProps: VPCDHCPOptionsAssociation): VPCDHCPOptionsAssociation & { attributes: VPCDHCPOptionsAssociationAttributes } { return ({ ...vPCDHCPOptionsAssociationProps, _logicalType: 'AWS::EC2::VPCDHCPOptionsAssociation', attributes: {  } }) }

export interface VPCDHCPOptionsAssociation extends KloudResource {
    dhcpOptionsId: Value<string>;
    vpcId: Value<string>;
}