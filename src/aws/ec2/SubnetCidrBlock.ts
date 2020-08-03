import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function subnetCidrBlock(subnetCidrBlockProps: SubnetCidrBlock): SubnetCidrBlock { return ({ ...subnetCidrBlockProps, _logicalType: '' }) }
  
export interface SubnetCidrBlock extends KloudResource {
  ipv6CidrBlock: Value<string>
  subnetId: Value<string>
}