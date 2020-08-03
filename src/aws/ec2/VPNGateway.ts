import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function vPNGateway(vPNGatewayProps: VPNGateway): VPNGateway { return ({ ...vPNGatewayProps, _logicalType: '' }) }
  
export interface VPNGateway extends KloudResource {
  amazonSideAsn?: Value<number>
  tags?: Tag[]
  type: Value<string>
}