import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function vPCPeeringConnection(vPCPeeringConnectionProps: VPCPeeringConnection): VPCPeeringConnection { return ({ ...vPCPeeringConnectionProps, _logicalType: '' }) }
  
export interface VPCPeeringConnection extends KloudResource {
  peerOwnerId?: Value<string>
  peerRegion?: Value<string>
  peerRoleArn?: Value<string>
  peerVpcId: Value<string>
  tags?: Tag[]
  vpcId: Value<string>
}