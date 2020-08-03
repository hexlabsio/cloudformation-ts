import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function transitGatewayRegistration(transitGatewayRegistrationProps: TransitGatewayRegistration): TransitGatewayRegistration { return ({ ...transitGatewayRegistrationProps, _logicalType: '' }) }
  
export interface TransitGatewayRegistration extends KloudResource {
  globalNetworkId: Value<string>
  transitGatewayArn: Value<string>
}