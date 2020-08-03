import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function egressOnlyInternetGateway(egressOnlyInternetGatewayProps: EgressOnlyInternetGateway): EgressOnlyInternetGateway { return ({ ...egressOnlyInternetGatewayProps, _logicalType: '' }) }
  
export interface EgressOnlyInternetGateway extends KloudResource {
  vpcId: Value<string>
}