import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function transitGatewayRegistration(transitGatewayRegistrationProps: TransitGatewayRegistration & { logicalName?: string }): TransitGatewayRegistration { return ({ ...transitGatewayRegistrationProps, _logicalType: 'AWS::NetworkManager::TransitGatewayRegistration' }) as unknown as TransitGatewayRegistration }

export interface TransitGatewayRegistration extends KloudResource {
    globalNetworkId: Value<string>;
    transitGatewayArn: Value<string>;
}