import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function customerGateway(customerGatewayProps: CustomerGateway): CustomerGateway { return ({ ...customerGatewayProps, _logicalType: '' }) }
  
export interface CustomerGateway extends KloudResource {
  bgpAsn: Value<number>
  ipAddress: Value<string>
  tags?: Tag[]
  type: Value<string>
}