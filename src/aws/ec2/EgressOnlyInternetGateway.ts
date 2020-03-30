import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function egressOnlyInternetGateway(egressOnlyInternetGatewayProps: EgressOnlyInternetGateway & { logicalName?: string }): EgressOnlyInternetGateway { return ({ ...egressOnlyInternetGatewayProps, _logicalType: 'AWS::EC2::EgressOnlyInternetGateway' }) as unknown as EgressOnlyInternetGateway }

export interface EgressOnlyInternetGateway extends KloudResource {
    vpcId: Value<string>;
}