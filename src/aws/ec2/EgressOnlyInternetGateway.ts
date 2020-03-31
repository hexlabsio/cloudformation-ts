import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type EgressOnlyInternetGatewayAttributes = {  }
export function egressOnlyInternetGateway(egressOnlyInternetGatewayProps: EgressOnlyInternetGateway): EgressOnlyInternetGateway & { attributes: EgressOnlyInternetGatewayAttributes } { return ({ ...egressOnlyInternetGatewayProps, _logicalType: 'AWS::EC2::EgressOnlyInternetGateway', attributes: {  } }) }

export interface EgressOnlyInternetGateway extends KloudResource {
    vpcId: Value<string>;
}