import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function customerGateway(customerGatewayProps: CustomerGateway & { logicalName?: string }): CustomerGateway { return ({ ...customerGatewayProps, _logicalType: 'AWS::EC2::CustomerGateway' }) as unknown as CustomerGateway }

export interface CustomerGateway extends KloudResource {
    bgpAsn: Value<number>;
    ipAddress: Value<string>;
    type: Value<string>;
    tags?: Tag[];
}