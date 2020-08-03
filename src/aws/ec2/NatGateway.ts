import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function natGateway(natGatewayProps: NatGateway): NatGateway { return ({ ...natGatewayProps, _logicalType: '' }) }
  
export interface NatGateway extends KloudResource {
  allocationId: Value<string>
  subnetId: Value<string>
  tags?: Tag[]
}