import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function vPCPeeringConnection(vPCPeeringConnectionProps: VPCPeeringConnection & { logicalName?: string }): VPCPeeringConnection { return ({ ...vPCPeeringConnectionProps, _logicalType: 'AWS::EC2::VPCPeeringConnection' }) as unknown as VPCPeeringConnection }

export interface VPCPeeringConnection extends KloudResource {
    peerVpcId: Value<string>;
    vpcId: Value<string>;
    peerOwnerId?: Value<string>;
    peerRegion?: Value<string>;
    peerRoleArn?: Value<string>;
    tags?: Tag[];
}