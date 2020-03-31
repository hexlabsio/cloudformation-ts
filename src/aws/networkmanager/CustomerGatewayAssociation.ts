import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type CustomerGatewayAssociationAttributes = {  }
export function customerGatewayAssociation(customerGatewayAssociationProps: CustomerGatewayAssociation): CustomerGatewayAssociation & { attributes: CustomerGatewayAssociationAttributes } { return ({ ...customerGatewayAssociationProps, _logicalType: 'AWS::NetworkManager::CustomerGatewayAssociation', attributes: {  } }) }

export interface CustomerGatewayAssociation extends KloudResource {
    globalNetworkId: Value<string>;
    customerGatewayArn: Value<string>;
    deviceId: Value<string>;
    linkId?: Value<string>;
}