import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type CustomerGatewayAttributes = {  }
export function customerGateway(customerGatewayProps: CustomerGateway): CustomerGateway & { attributes: CustomerGatewayAttributes } { return ({ ...customerGatewayProps, _logicalType: 'AWS::EC2::CustomerGateway', attributes: {  } }) }

export interface CustomerGateway extends KloudResource {
    bgpAsn: Value<number>;
    ipAddress: Value<string>;
    type: Value<string>;
    tags?: Tag[];
}