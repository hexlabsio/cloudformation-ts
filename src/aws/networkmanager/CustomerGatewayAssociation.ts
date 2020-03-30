import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function customerGatewayAssociation(customerGatewayAssociationProps: CustomerGatewayAssociation & { logicalName?: string }): CustomerGatewayAssociation { return ({ ...customerGatewayAssociationProps, _logicalType: 'AWS::NetworkManager::CustomerGatewayAssociation' }) as unknown as CustomerGatewayAssociation }

export interface CustomerGatewayAssociation extends KloudResource {
    globalNetworkId: Value<string>;
    customerGatewayArn: Value<string>;
    deviceId: Value<string>;
    linkId?: Value<string>;
}