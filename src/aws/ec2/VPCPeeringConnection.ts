import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type VPCPeeringConnectionAttributes = {  }
export function vPCPeeringConnection(vPCPeeringConnectionProps: VPCPeeringConnection): VPCPeeringConnection & { attributes: VPCPeeringConnectionAttributes } { return ({ ...vPCPeeringConnectionProps, _logicalType: 'AWS::EC2::VPCPeeringConnection', attributes: {  } }) }

export interface VPCPeeringConnection extends KloudResource {
    peerVpcId: Value<string>;
    vpcId: Value<string>;
    peerOwnerId?: Value<string>;
    peerRegion?: Value<string>;
    peerRoleArn?: Value<string>;
    tags?: Tag[];
}