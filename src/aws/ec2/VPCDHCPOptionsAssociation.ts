import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function vPCDHCPOptionsAssociation(vPCDHCPOptionsAssociationProps: VPCDHCPOptionsAssociation & { logicalName?: string }): VPCDHCPOptionsAssociation { return ({ ...vPCDHCPOptionsAssociationProps, _logicalType: 'AWS::EC2::VPCDHCPOptionsAssociation' }) as unknown as VPCDHCPOptionsAssociation }

export interface VPCDHCPOptionsAssociation extends KloudResource {
    dhcpOptionsId: Value<string>;
    vpcId: Value<string>;
}