import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function transitGateway(transitGatewayProps: TransitGateway & { logicalName?: string }): TransitGateway { return ({ ...transitGatewayProps, _logicalType: 'AWS::EC2::TransitGateway' }) as unknown as TransitGateway }

export interface TransitGateway extends KloudResource {
    defaultRouteTablePropagation?: Value<string>;
    description?: Value<string>;
    autoAcceptSharedAttachments?: Value<string>;
    defaultRouteTableAssociation?: Value<string>;
    vpnEcmpSupport?: Value<string>;
    dnsSupport?: Value<string>;
    amazonSideAsn?: Value<number>;
    tags?: Tag[];
}