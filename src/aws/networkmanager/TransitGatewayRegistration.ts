import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type TransitGatewayRegistrationAttributes = {  }
export function transitGatewayRegistration(transitGatewayRegistrationProps: TransitGatewayRegistration): TransitGatewayRegistration & { attributes: TransitGatewayRegistrationAttributes } { return ({ ...transitGatewayRegistrationProps, _logicalType: 'AWS::NetworkManager::TransitGatewayRegistration', attributes: {  } }) }

export interface TransitGatewayRegistration extends KloudResource {
    globalNetworkId: Value<string>;
    transitGatewayArn: Value<string>;
}