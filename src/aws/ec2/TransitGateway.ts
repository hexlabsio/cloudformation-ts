import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type TransitGatewayAttributes = {  }
export function transitGateway(transitGatewayProps: TransitGateway): TransitGateway & { attributes: TransitGatewayAttributes } { return ({ ...transitGatewayProps, _logicalType: 'AWS::EC2::TransitGateway', attributes: {  } }) }

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