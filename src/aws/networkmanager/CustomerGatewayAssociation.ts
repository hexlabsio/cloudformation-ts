import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function customerGatewayAssociation(customerGatewayAssociationProps: CustomerGatewayAssociation): CustomerGatewayAssociation { return ({ ...customerGatewayAssociationProps, _logicalType: '' }) }
  
export interface CustomerGatewayAssociation extends KloudResource {
  globalNetworkId: Value<string>
  customerGatewayArn: Value<string>
  deviceId: Value<string>
  linkId?: Value<string>
}